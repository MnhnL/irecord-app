<!--<div class="table-view-cell">-->
  <!--Use scientific names-->
  <!--<div id="use-scientific-btn" data-setting="useScientificNames"-->
       <!--class="toggle no-yes <%- obj.useScientificNames ? 'active' : '' %>">-->
    <!--<div class="toggle-handle"></div>-->
  <!--</div>-->
<!--</div>-->

<!--<div class="table-view-cell">-->
  <!--Autosynchronise records-->
  <!--<div id="use-autosync-btn" data-setting="autosync"-->
       <!--class="toggle no-yes <%- obj.autosync ? 'active' : '' %>">-->
    <!--<div class="toggle-handle"></div>-->
  <!--</div>-->
<!--</div>-->

<li class="table-view-divider">Location</li>

<li class="table-view-cell">
  <a href="#app/settings/locations" class="navigate-right">
    <span class="media-object pull-left icon icon-location"></span>
    Manage Saved
  </a>
</li>
<li class="table-view-cell">
  Translate to Grid Ref
  <div id="use-gridref-btn" data-setting="useGridRef"
       class="toggle no-yes <%- obj.useGridRef ? 'active' : '' %>">
    <div class="toggle-handle"></div>
  </div>
</li>


<li class="table-view-divider">Records</li>

<li class="table-view-cell">
  <a id="delete-all-btn">
    <span class="media-object pull-left icon icon-delete"></span>
    Delete All Saved
  </a>
</li>

