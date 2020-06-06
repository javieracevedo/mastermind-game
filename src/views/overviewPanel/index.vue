<template>
  <div class="overview-panel">
    <code-log :code-log="codeLog" class="code-log"/>
    <current-code-presenter :code="currentCode" class="current-code-presenter"/>
  </div>
</template>

<script>

import codeLog from "./codeLogPresenter";
import currentCodePresenter from "@c/shared/codePresenter/";
import { mapState } from 'vuex';

export default {
  name: "CodeViewer",
  components: {
    codeLog,
    currentCodePresenter
  },
  computed: {
    ...mapState({
      currentCode: state => state.currentCode,
      codeLog: state => state.codeLog
    })
  }
}
</script>

<style lang="scss">
.overview-panel {

    grid-column-start: 2;
    grid-row-start: 1;

  .code-log {
    background: #e3e3e3;
    border-radius: 10px;
    border-bottom: 0;
    margin-bottom: 12px;
  }
}
  .current-code-presenter {
    background: #b7b7b7;
    border-radius: 10px;
  }

</style>