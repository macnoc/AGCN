<script>
  import logo from "../assets/macnoc_logo.svg";
</script>

<footer>
  <p>Powered by</p>
  <a href="https://macnoc.com" target="_blank"><img src={logo} alt="Macnoc Logo" /></a>
</footer>

<style>
  footer {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 5px;
  }
  p{
    color: var(--modal-support-color);
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  a{
    display: inline-block;
  }
  a img {
    width: 60px;
  }
</style>
