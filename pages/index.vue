<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <section w-full h-full overflow="y-auto x-hidden">
    <div relative w-auto h-full m="x-auto" flex="~ row" justify-center items-start>
      <Sidebar></Sidebar>

      <main relative flex="~ col grow-0" justify-start items-start p="x-4" w-640px min-h-full>
        <div w-full p="t-3" flex="~" justify-between items-center>
          <div text="lg" font="bold">MEMO</div>
          <div w-150px>
            <el-input w-full class="search-input el-input--no-border"></el-input>
          </div>
        </div>

        <div w-full m="t-5" border="base 1px solid" rounded bg="white">
          <el-input class="el-input--no-border" w-full type="textarea"></el-input>
        </div>

        <div w-full m="t-2">
          <div m="y-2">
            <div relative bg-white rounded p="4" overflow="hidden" shadow>
              <div flex justify-between items-center>
                <span text="secondary sm">2023-01-25 10:58:38</span>
              </div>

              <div relative text="base sm" overflow="hidden">
                <span class="leading-loose">Hello World</span>
              </div>
            </div>
          </div>
          <div class="my-2">
            <div relative bg-white rounded p="4" overflow="hidden" shadow>
              <div flex justify-between items-center>
                <span text="secondary sm">2023-01-25 10:58:38</span>
              </div>

              <div relative text="base sm" overflow="hidden">
                <span class="leading-loose">Hello World</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<style lang="scss">
.el-input--no-border {
  .el-input__wrapper,
  .el-input__wrapper.is-focus,
  .el-textarea__inner,
  .el-input__inner {
    box-shadow: none;
  }
}
.el-input.search-input .el-input__wrapper {
  background: #efefef;
  .el-input__inner {
    border-radius: 8px;
  }
}
</style>
