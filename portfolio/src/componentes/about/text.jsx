'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: ['FACU', 'FREELANCER', 'DESARROLLADOR WEB', 'GOOGLEADOR'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
