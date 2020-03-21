<template>
  <div class="row">
    <div class="col-4">
      <div class="mb-4">
        <div role="search" class="bd-search d-flex align-items-center">
          <span
            style="position: relative; display: inline-block; direction: ltr;"
            ><input
              type="search"
              class="form-control"
              id="search-input"
              placeholder="Search..."
              aria-label="Search for..."
              autocomplete="off"
              spellcheck="false"
              style="position: relative; vertical-align: top;"
            />
          </span>
        </div>
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
