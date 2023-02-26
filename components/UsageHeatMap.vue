<script setup lang="ts">
const { allStat, nullCell, currentStat } = useHeatMap();
const Weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
</script>

<template>
  <div class="flex flex-row justify-start items-center w-full h-32 flex-wrap pr-6 pb-3 shrink-0">
    <div class="w-7 h-full grid grid-rows-7 mr-1">
      <span v-for="week in Weeks" :key="week" pr-1 w-full h-full text="right xs gray-400">{{
        week
      }}</span>
    </div>
    <div class="h-full grid grid-rows-7 w-200px grid-flow-col grid-cols-12">
      <div v-for="(item, index) in allStat" :key="index" class="stat-wrapper">
        <el-tooltip
          effect="dark"
          :content="`${item.count} memo on ${item.date}`"
          placement="top"
          :show-after="200"
        >
          <span
            class="map-day"
            :class="[currentStat?.date === item.date ? 'is-current-map-day' : '']"
          ></span>
        </el-tooltip>
      </div>
      <div v-for="(item, index) in nullCell" :key="index" class="stat-wrapper">
        <span class="null"></span>
      </div>
    </div>
  </div>
</template>

<style>
.map-day {
  @apply: block rounded-sm bg-gray-200 w-[14px] h-[14px] cursor-pointer;
}
.is-current-map-day {
  @apply: border-primary border-1px border-solid;
}
</style>
