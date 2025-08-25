<script>
import ApiMixin from "@/api.js";

export default {
  mixins: [ApiMixin],
  data() {
    return { productList: [] };
  },
  async mounted() {
    this.productList = await this.$callApi(
      "https://3dda86bd-82fd-40bb-86c2-3e061f2aabf0.mock.pstmn.io/list",
      "get"
    );
    console.log(this.productList);
  },
};
</script>
