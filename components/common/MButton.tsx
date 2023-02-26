export default defineComponent({
  name: "MButton",
  render() {
    return (
      <div>
        <button class="inline-flex justify-center items-center rounded">
          {this.$slots.default?.()}
        </button>
      </div>
    );
  },
});
