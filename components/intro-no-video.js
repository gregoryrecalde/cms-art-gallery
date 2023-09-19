import React, { useEffect, useState } from 'react';
import FloatingMenu from './floatingmenu'

export default function IntroNoVideo() {

  return (
    <section className={`fixed top-0 left-0 right-0 flex-col md:flex-row flex md:justify-between z-50 bg-transparent p-4 shawn-secondary-text-color`}>
      
      <div className="flex items-center">
        <img src="https://drive.google.com/uc?id=1SkLIClwh9azrq_QloyR1m0CL_CX4z5pJ" className="w-12 h-12 mr-2" alt="Logo" />
        <h1 className="text-1xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">
          Warren Art
        </h1>
      </div>
    </section>
  );
}
