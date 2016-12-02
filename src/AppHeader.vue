<template>
  <div>
    <h1>HEADER</h1>

    <ul class="tab tab-block">
      <li class="tab-item" v-bind:class="{ active: active('/') }">
        <router-link to="/">Home</router-link>
      </li>
      <li class="tab-item" v-bind:class="{ active: active('/receipts') }">
        <router-link to="/receipts">Receipts</router-link>
      </li>
      <li class="tab-item" v-bind:class="{ active: active('/events') }">
        <router-link to="/events">Events</router-link>
      </li>
    </ul>

    <div class="modal">
      <div class="modal-overlay"></div>
      <div class="modal-container">
          <div class="modal-header">
              <button class="btn btn-clear float-right"></button>
              <div class="modal-title">Modal title</div>
          </div>
          <div class="modal-body">
              <div class="content">
                  <!-- content here -->
              </div>
          </div>
          <div class="modal-footer">
              <button class="btn btn-link">Close</button>
              <button class="btn btn-primary">Share</button>
          </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    data () {
      return {
      }
    },

    methods: {
      active: function(tab) {
        return this.$route.path == tab
      }
    }
  }
</script>
