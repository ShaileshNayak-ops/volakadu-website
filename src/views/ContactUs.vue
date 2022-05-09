<template>
  <div class="is-fullheight">
    <!-- First Container -->

    <div class="container">
      <h1>{{ PHP_PATH }}</h1>
      <div class="columns is-multiline p-5 h-full">
        <div class="card has-shadow column m-6">
          <div class="card-header">
            <p class="card-header-title is-size-3">Address</p>
          </div>
          <div class="card-content">
            Niveditha Marg, Kadekoppala, <br />
            Chitpady, Udupi, <br />
            Karnataka <br />576101
          </div>
        </div>

        <div class="card has-shadow column m-6">
          <div class="card-header">
            <p class="card-header-title is-size-3">Phone Number</p>
          </div>
          <div class="card-content">
            <p class="is-size-4">+91: 94817 51508</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End  -->
    <div class="container">
      <div class="columns is-multiline p-5">
        <div class="card has-shadow column m-6">
          <div class="card-header">
            <p class="card-header-title is-size-3">Location</p>
          </div>
          <div class="card-content">
            <div class="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3995794.1052158806!2d75.25449614503087!3d12.03369669195369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb6bc9b0906f%3A0xee0cf3977ef7ad8c!2sVolakadu%20Government%20High%20School!5e0!3m2!1sen!2sin!4v1650813270388!5m2!1sen!2sin"
                width="450"
                height="450"
                frameborder="0"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div class="card has-shadow column m-6">
          <div class="card-header">
            <p class="card-header-title is-size-3">Send Us A Mail</p>
          </div>
          <div class="card-column">
            <section class="text-center m-2 text-blue-600">
              Somewhere@somewhere.place
            </section>
            <form :action="sendMail" method="POST">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Your Name..."
                    name="name"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      type="email"
                      class="input"
                      placeholder="Your Email..."
                      name="email"
                      autocomplete="off"
                      required
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Subject</label>
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      placeholder="Your Subject..."
                      autocomplete="off"
                      name="subject"
                      required
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      name="message"
                      autocomplete="off"
                      placeholder="Your Message.."
                    ></textarea>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  class="button is-link is-light mr-2"
                />

                <input
                  type="reset"
                  value="Reset"
                  class="button is-danger is-light"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
import Footer from "@/components/Footer.vue"
export default defineComponent({
  setup() {
    const phpPath: string = import.meta.env.VITE_PHP_PATH
    const getMailPath = (): string => {
      if (import.meta.env.PROD) {
        return "./php/sendMail.php"
      } else {
        return phpPath.concat("/php/sendMail.php")
      }
    }
    return {
      PHP_PATH: phpPath,
      sendMail: getMailPath(),
    }
  },
  components: {
    Footer,
  },
})
</script>
<style scoped>
@media (max-width: 750px) {
  .map-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
}
</style>
