const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractAllegories(fetchResponse) {
  return fetchResponse?.data?.allegoriesCollection?.items?.[0]
}



function extractAllegoriesEntries(fetchResponse) {
  return fetchResponse?.data?.allegoriesCollection?.items
}

export async function getPreviewAllegoriesBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      allegoriesCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractAllegories(entry)
}

export async function getAllAllegoriesWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      allegoriesCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractAllegoriesEntries(entries)
}

export async function getAllAllegoriesForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      allegoriesCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractAllegoriesEntries(entries)
}


export async function getAllegoriesAndMoreAllegories(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      allegoriesCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      allegoriesCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    allegories: extractAllegories(entry),
    moreAllegories: extractAllegoriesEntries(entries),
  }

  
  
}
