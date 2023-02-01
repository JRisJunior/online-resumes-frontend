import axios from 'axios';
import { useState, useEffect } from 'react';
import { StudentsIndex } from "./StudentsIndex";


export function Content() {
  return (
    <div>
      <StudentsIndex />
    </div>
  );
}