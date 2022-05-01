<script lang="js">
import { defineComponent, ref } from "vue"
import ArrowSVG from "@/assets/ArrowSVG.vue"
import CancelSVG from "@/assets/CancelSVG.vue"

export default defineComponent({
  components: {
    ArrowSVG,
    CancelSVG,
  },
  setup() {
    const open = ref(false) 
    const el = ref();
    /**@type {Element} e */
    const openTree = (e) => {
      e.target.parentElement.querySelector('.nested').classList.toggle('active')
      e.target.classList.toggle("caret-down");
    }
    return {
      open,
      openTree
    }
  },
})
</script>
<template>
  <div class="is-fullheight">
    <div class="">
      <div class="">
        <div class="card has-shadow column m-6 is-half">
          <div class="card-header">
            <p class="card-header-title">Primary</p>
          </div>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>
                  <p class="is-size-4">Boys:</p>
                  <ul>
                    <li>
                      <p class="is-size-5">Normal Uniform:</p>
                      <ul>
                        <li>
                          <p class="is-size-6">Shirt:</p>
                          <ul>
                            <li>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quia mollitia error nihil.
                              Cupiditate, eaque modi rerum commodi quidem
                              suscipit repellendus blanditiis labore
                              reprehenderit ullam iure, quia adipisci quis,
                              molestiae sunt!
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p class="is-size-6">Pant:</p>
                          <ul>
                            <li>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quia mollitia error nihil.
                              Cupiditate, eaque modi rerum commodi quidem
                              suscipit repellendus blanditiis labore
                              reprehenderit ullam iure, quia adipisci quis,
                              molestiae sunt!
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p class="is-size-5">Special Uniform:</p>
                      <ul>
                        <li>
                          <p class="is-size-6">Shirt:</p>
                          <ul>
                            <li>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quia mollitia error nihil.
                              Cupiditate, eaque modi rerum commodi quidem
                              suscipit repellendus blanditiis labore
                              reprehenderit ullam iure, quia adipisci quis,
                              molestiae sunt!
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p class="is-size-6">Pant:</p>
                          <ul>
                            <li>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quia mollitia error nihil.
                              Cupiditate, eaque modi rerum commodi quidem
                              suscipit repellendus blanditiis labore
                              reprehenderit ullam iure, quia adipisci quis,
                              molestiae sunt!
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card has-shadow column m-6">
          <div class="card-header">
            <p class="card-header-title">Primary</p>
          </div>
          <div class="card-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            perspiciatis reprehenderit accusamus tenetur doloremque dolores.
            Accusantium, eaque repudiandae, doloribus, dolore vitae et ut cumque
            iusto modi quo laborum magni ab.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

