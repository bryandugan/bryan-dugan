<template>
  <div class="layout">
    <header class="header">
      <g-image alt="Bryan Dugan Logo" src="~/assets/logo.svg" class="logo" />
    </header>
    <slot/>
    <footer>
      <div class="links">
        <a
                href="mailto:bryan@bryandugan.com"
                target="_blank"
                class="link">Hire Me</a>
        <a
                href="https://spaceraycreative.com/work"
                target="_blank"
                class="link">Portfolio</a>
        <a
                href="resume"
                target="_blank"
                class="link">Resume</a>
        <a
                href="https://www.linkedin.com/in/bryandugan/"
                target="_blank"
                class="link">LinkedIn</a>
        <a
                href="https://instagram.com/bryan.dugan"
                target="_blank"
                class="link">Instagram</a>
        <a
                href="https://twitter.com/bryandugan"
                target="_blank"
                class="link">Twitter</a>
        <a
                href="http://codepen.io/bryandugan/"
                target="_blank"
                class="link">Codepen</a>
        <a
                href="https://dribbble.com/bryandugan"
                target="_blank"
                class="link">Dribbble</a>

      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: 'Lato', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  font-size: 22px
}

a {
  color: #7a9d6a;
}

footer {
  font-size: .875rem;
  text-transform: uppercase;
}
footer .link {
  margin-right: 1rem;
}
.logo {
  width: 80px;
}

.layout {
  max-width: 760px;
  padding-left: 3rem;
  padding-right: 3rem;
}

.header {
  margin-top: 3rem;
  display: flex;
  justify-content: left;
  align-items: center;
}

</style>
