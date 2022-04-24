<template>
  <div>
    <!-- First Container -->
    <div class="container">
      <div class="columns is-multiline p-5">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3995794.1052158806!2d75.25449614503087!3d12.03369669195369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb6bc9b0906f%3A0xee0cf3977ef7ad8c!2sVolakadu%20Government%20High%20School!5e0!3m2!1sen!2sin!4v1650813270388!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div class="card has-shadow column m-6">
          <div class="card-header">
            <p class="card-header-title is-size-3">Send Us A Mail</p>
          </div>
          <div class="card-column">
            <form action="">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Your Name..."
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
                      required
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      class="textarea"
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
    <!-- <div class="card has-shadow column is-one-quarter m-6">
      <div class="title">Address</div>
      <div class="card-content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>

    <div class="card has-shadow column is-one-quarter m-6 has-shadow">
      <div class="title">Location</div>
      <div class="card-content">blah blah blah</div>
    </div> -->

    <!-- <form method="POST" id="sign-in-form" class="column is-one-quarter">
      <div class="field">
        <label class="label">Email</label>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                type="email"
                name="email"
                class="input "
                id="email"
                required
              />
            </p>
          </div>half
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                type="email"
                name="email"
                class="input is-medium"
                id="email"
                required
              />
            </p>
          </div>
        </div>
      </div>
      <button type="submit" class="button is-medium ">Sign In</button>
    </form>
    <div class="card column is-one-quarter">
      <div class="title">Location</div>
      <div class="card-content">blah blah blah</div>
    </div>

    <div class="card column is-one-quarter">
      <div class="title">Something</div>
      <div class="card-content">blah blah blah</div>
    </div> -->
  </div>
</template>
<style scoped>
</style>