<template>
  <nav>
    <a href="#top" rel="tag">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        />
      </svg>
      <span class="tooltip">Home</span>
    </a>
    <a href="#about" rel="tag">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="tooltip">About Me</span>
    </a>
    <a href="#experience" rel="tag">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
        <path
          d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
        />
      </svg>
      <span class="tooltip">My Experiences</span>
    </a>
    <a href="#projects" rel="tag">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="tooltip">My Projects</span>
    </a>
    <a href="#contact" rel="tag">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="tooltip">Contact Me</span>
    </a>
    <a
      href="https://drive.google.com/file/d/1kYoxdLcPnO5h7ehvS6RkL8_2aIfyihdu/view?usp=sharing"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="tooltip">My Resume</span>
    </a>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--cl-primary);
  height: 3rem;
  position: sticky;
  top: 0px;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

nav a svg {
  height: 2.25rem;
  fill: var(--cl-text);
}

nav a {
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  margin: 0 0.25rem;
  border-radius: 4px;
  position: relative;
}

nav a .tooltip {
  position: absolute;
  color: var(--cl-text);
  top: -2rem;
  background-color: var(--cl-primary);
  padding: 2px 4px;
  font-size: small;
  white-space: nowrap;
  transition: all 0.25s;
  opacity: 0;
  border-radius: 2px;
  pointer-events: none;
}

nav a:hover .tooltip {
  top: -2.5rem;
  opacity: 1;
}

nav a:hover {
  background-color: rgba(100, 100, 100, 0.25);
}
</style>
