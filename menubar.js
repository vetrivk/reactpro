class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- ----side navbar start--- -->
    <div class="page-container">
      <div class="sidebar">
        <!-- Logo design -->
        <div class="logo-container">
          <div class="logo">H</div>
          <div class="logo-text">Health Mart</div>

          <!-- Toggle btn design -->
          <div class="toggle-btn">
            <i class="bx bx-chevron-left"></i>
          </div>
        </div>
        <!-- Search bar and navbar -->
        <!-- <div class="search-bar-container">
          <i class="bx bx-search"></i>
          <input
            class="form-control"
            type="search"
            name=""
            id=""
            placeholder="search"
          />
        </div> -->

        <!-- Navbar -->
        <div class="nav-container">
          <ul class="navigation">
            <li>
              <a href="change.html">
                <i class="bx bxs-home-circle"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="Products.html">
                <i class="bx bxs-shopping-bag"></i>
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="Categories.html">
                <i class="bx bxs-category"></i>
                <span>Categories</span>
              </a>
            </li>
            <li>
              <a href="Orders.html">
                <i class="bx bxs-notepad"></i>
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="customer.html">
                <i class="bx bxs-user"></i>
                <span>Customer</span>
              </a>
            </li>
            <li>
              <a href="offer.html">
                <i class="bx bxs-offer"></i>
                <span>Offers</span>
              </a>
            </li>
            <li>
              <a href="Setting.html">
                <i class="bx bxs-cog"></i>
                <span>Setting</span>
              </a>
            </li>
            <li>
              <a href="change.html">
                <i class="bx bxs-log-out-circle"></i>
                <span>Log Out</span>
              </a>
            </li>
            <!-- ---------------------------------------------------------------------- -->
            <li>
              <a
                class="sidebar-link collapsed"
                data-bs-target="#master"
                data-bs-toggle="collapse"
                href="#"
              >
                <i class="fas fa-cogs pe-1"></i>
                <span>Master</span>
                <div class="masterbtn">
                  <i class="bx bx-chevron-down"></i>
                </div>
              </a>

              <ul id="master" class="collapse navigation">
                <li>
                  <a href="change.html"
                    ><i class="bx bxs-log-out-circle"></i><span> item1</span></a
                  >
                </li>
                <li>
                  <a href="change.html"
                    ><i class="bx bxs-log-out-circle"></i><span> item3</span></a
                  >
                </li>
                <li>
                  <a href="change.html"
                    ><i class="bx bxs-log-out-circle"></i><span> item4</span></a
                  >
                </li>
              </ul>
            </li>
            <!-- ----- -->

            <!-- ---------------------------------------------------------------------- -->
          </ul>
          <!-- ----Dark and light mode--- -->
          <div class="dark-mode-con">
            <i class="bx bxs-moon"></i>
            <span>Dark Mode</span>
            <div class="toggle-switch-btn">
              <span class="switch"></span>
            </div>
          </div>
          <!-- ----Dark and light mode--- -->
        </div>
        <!-- navbar end -->
      </div>
    </div>
    <!-- -----side navbar End------------------- -->
          
          `;
  }
}

// Make sure the element's name contains a hyphen
customElements.define("my-sidebar", SpecialHeader);
