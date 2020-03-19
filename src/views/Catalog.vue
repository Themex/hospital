<template>
  <div class="row">
    <div class="col-4">
      <div class="mb-4">
        <form role="search" class="bd-search d-flex align-items-center">
          <span
            class="algolia-autocomplete algolia-autocomplete-left"
            style="position: relative; display: inline-block; direction: ltr;"
            ><input
              type="search"
              class="form-control ds-input"
              id="search-input"
              placeholder="Search..."
              aria-label="Search for..."
              autocomplete="off"
              data-docs-version="4.4"
              spellcheck="false"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="false"
              aria-owns="algolia-autocomplete-listbox-0"
              dir="auto"
              style="position: relative; vertical-align: top;"/>
            <pre
              aria-hidden="true"
              style='position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;'
            >
d</pre
            >
            <span
              class="ds-dropdown-menu ds-with-1"
              role="listbox"
              id="algolia-autocomplete-listbox-0"
              style="position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;"
              ><div class="ds-dataset-1"></div></span
          ></span>
          <button
            class="btn btn-link bd-search-docs-toggle d-md-none p-0 ml-3"
            type="button"
            data-toggle="collapse"
            data-target="#bd-docs-nav"
            aria-controls="bd-docs-nav"
            aria-expanded="false"
            aria-label="Toggle docs navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M4 7h22M4 15h22M4 23h22"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      <div class="list-group" id="list-tab" role="tablist">
        <a
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center active"
          id="list-home-list"
          data-toggle="list"
          href="#list-home"
          role="tab"
          aria-controls="home"
          >Anusophobia</a
        >
        <a
          class="list-group-item d-flex list-group-item-action justify-content-between align-items-center"
          id="list-profile-list"
          data-toggle="list"
          href="#list-profile"
          role="tab"
          aria-controls="profile"
          >BiberGayology</a
        >
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="list-home"
          role="tabpanel"
          aria-labelledby="list-home-list"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="list-profile"
          role="tabpanel"
          aria-labelledby="list-profile-list"
        ></div>
      </div>
    </div>
  </div>
</template>
