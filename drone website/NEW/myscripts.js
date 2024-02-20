import React from 'react'

import Script from 'dangerous-html/react'

import Features from './features'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div data-modal="practices" className={styles['modal']}>
        <div className={styles['practices']}>
          <div className={styles['heading']}>
            <span className={styles['header']}>Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className={styles['close']}
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className={styles['grid']}>
            <div className={styles['section']}>
              <div className={styles['heading01']}>
                <span className={styles['header01']}>Cardiology</span>
                <span className={styles['caption']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image']}
                />
              </div>
            </div>
            <div className={styles['section1']}>
              <div className={styles['heading02']}>
                <span className={styles['header02']}>Orthopedics</span>
                <span className={styles['caption1']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text01']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image01']}
                />
              </div>
            </div>
            <div className={styles['section2']}>
              <div className={styles['heading03']}>
                <span className={styles['header03']}>Ophtalmology</span>
                <span className={styles['caption2']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text02']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image02']}
                />
              </div>
            </div>
            <div className={styles['section3']}>
              <div className={styles['heading04']}>
                <span className={styles['header04']}>Pediatrics</span>
                <span className={styles['caption3']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text03']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image03']}
                />
              </div>
            </div>
            <div className={styles['section4']}>
              <div className={styles['heading05']}>
                <span className={styles['header05']}>Nutrition</span>
                <span className={styles['caption4']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text04']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image04']}
                />
              </div>
            </div>
            <div className={styles['section5']}>
              <div className={styles['heading06']}>
                <span className={styles['header06']}>General</span>
                <span className={styles['caption5']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text05']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image05']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles['hero']}>
        <header data-thq="thq-navbar" className={styles['navbar']}>
          <div className={styles['left']}>
            <img alt="image" src="/logo-1500h.png" className={styles['logo']} />
            <nav className={styles['links']}>
              <a href="#features" className={styles['link']}>
                Features
              </a>
              <a href="#how-it-works" className={styles['link01']}>
                How it works
              </a>
              <span className={styles['link02']}>Prices</span>
              <span className={styles['link03']}>Contact</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className={styles['right']}>
            <button
              className={` ${styles['phone']} ${projectStyles['button']} `}
            >
              <img alt="image" src="/phone.svg" className={styles['image06']} />
            </button>
            <a
              href="#book"
              className={` ${styles['book']} ${projectStyles['button']} ${projectStyles['button-main']} `}
            >
              <img
                alt="image"
                src="/calendar.svg"
                className={styles['image07']}
              />
              <span className={styles['text06']}>Order the medicine</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className={styles['burger-menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon1']}>
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className={styles['nav']}
            >
              <div className={styles['container1']}>
                <img
                  alt="image"
                  src="/logo-1500h.png"
                  className={styles['image08']}
                />
                <div data-thq="thq-close-menu" className={styles['menu-close']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon3']}>
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className={styles['nav1']}
              >
                <span className={styles['text07']}>Features</span>
                <span className={styles['text08']}>How it works</span>
                <span className={styles['text09']}>Prices</span>
                <span className={styles['text10']}>Contact</span>
                <a
                  href="#book"
                  className={` ${styles['book1']} ${projectStyles['button']} ${projectStyles['button-main']} `}
                >
                  <img
                    alt="image"
                    src="/calendar.svg"
                    className={styles['image09']}
                  />
                  <span className={styles['text11']}>Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className={styles['main']}>
          <div className={styles['content']}>
            <div className={styles['heading07']}>
              <h1 className={styles['header07']}>
                Fast &amp; Reliable Drone Deliveries
              </h1>
              <p className={styles['caption6']}>
                Our cutting-edge drone technology guarantees quick and reliable
                deliveries of essential medical supplies to areas in need.
              </p>
            </div>
            <button
              className={` ${projectStyles['button']} ${projectStyles['button-main']} ${styles['book2']} `}
            >
              <img
                alt="image"
                src="/calendar.svg"
                className={styles['image10']}
              />
              <a href="#book" className={styles['link04']}>
                Order the medicine
              </a>
            </button>
          </div>
          <a
            href="https://C:\\Users\\Prateek\\Downloads\\a1\\SKY (1).png"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link05']}
          >
            <div className={styles['image11']}>
              <img
                alt="image"
                src="/drone-500h.jpg"
                className={styles['image12']}
              />
            </div>
          </a>
        </div>
        <div id="features" className={styles['features']}>
          <div className={styles['content1']}>
            <Features></Features>
            <Features title="Virtual Clinic"></Features>
          </div>
        </div>
        <div className={styles['background']}></div>
      </section>
      <section id="how-it-works" className={styles['why']}>
        <div className={styles['heading08']}>
          <h2 className={styles['header08']}>Why choose us</h2>
          <p className={styles['header09']}>
            <span>Delivering hope, faster and farther.</span>
            <br></br>
            <span>
              In remote and war-hit regions, access to essential medical
              supplies can be a matter of life and death. At Sky Aid, we are
              revolutionizing healthcare delivery by leveraging the power of
              drone technology. Here&apos;s why you should choose us:
            </span>
          </p>
        </div>
        <div className={styles['content2']}>
          <div className={styles['video']}></div>
          <div className={styles['caption7']}>
            <h3 className={styles['header10']}>Speed and Efficiency</h3>
            <p className={styles['header11']}>
              <span className={styles['text15']}>
                Time-sensitive deliveries: We deliver critical medical supplies
                faster than traditional methods, saving lives in critical
                situations.
              </span>
              <br className={styles['text16']}></br>
              <br className={styles['text17']}></br>
              <span className={styles['text18']}>
                Overcoming geographical barriers: Drones navigate challenging
                terrains and bypass infrastructure limitations, reaching even
                the most remote locations
              </span>
            </p>
          </div>
        </div>
        <div className={styles['content3']}>
          <div className={styles['video1']}></div>
          <div className={styles['caption8']}>
            <h3 className={styles['header12']}> Improved Accessibility</h3>
            <p className={styles['header13']}>
              <span>
                Safety first: We prioritize rigorous safety protocols and comply
                with all regulations to ensure responsible drone operation.
              </span>
              <br className={styles['text20']}></br>
              <br className={styles['text21']}></br>
              <span>
                Transparency and trust: We are committed to data security and
                open communication, building trust with our partners and
                communities.
              </span>
              <br className={styles['text23']}></br>
              <br className={styles['text24']}></br>
              <span>
                Collaborative approach: We work closely with healthcare
                organizations, NGOs, and local communities to ensure impactful
                and sustainable solutions.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section id="book" className={styles['book3']}>
        <div className={styles['heading09']}>
          <h2 className={styles['text26']}>Order an Medicine</h2>
        </div>
        <div className={styles['form']}>
          <div className={styles['types']}></div>
          <div className={styles['inputs']}>
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className={` ${projectStyles['input']} ${projectStyles['book-input']} `}
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className={` ${projectStyles['input']} ${projectStyles['book-input']} `}
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className={` ${projectStyles['input']} ${projectStyles['book-input']} `}
            />
            <div className={styles['date']}>
              <input
                type="date"
                placeholder="Date"
                className={` ${projectStyles['input']} ${projectStyles['book-input']} `}
              />
              <img
                alt="image"
                src="/calendar-2.svg"
                className={styles['image13']}
              />
            </div>
            <input
              type="text"
              placeholder="Practice"
              className={` ${projectStyles['input']} ${projectStyles['book-input']} `}
            />
            <div className={styles['lower']}>
              <p className={styles['text27']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className={styles['button']}>
                <button
                  className={` ${styles['book4']} ${projectStyles['button']} ${projectStyles['button-main']} `}
                >
                  <span>Book</span>
                </button>
                <p className={styles['text29']}>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text31']}>adipiscing elit</span>
                  <span>
                    , sed do eiusmod tempor
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text33']}>incididunt</span>
                  <span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles['download']}>
        <div className={styles['main1']}>
          <img
            alt="image"
            src="/phone-1500w.png"
            className={styles['image14']}
          />
          <div className={styles['content4']}>
            <h2 className={styles['text35']}>
              <span className={styles['text36']}>Download our mobile app </span>
              <br></br>
              <span>(Upcomming project)</span>
              <br></br>
            </h2>
            <div className={styles['buttons']}>
              <button
                className={` ${styles['i-os']} ${projectStyles['button']} ${projectStyles['button-main']} `}
              >
                <img
                  alt="image"
                  src="/apple.svg"
                  className={styles['image15']}
                />
                <span>Download for iOS</span>
              </button>
              <button
                className={` ${projectStyles['button']} ${projectStyles['button-main']} ${styles['android']} `}
              >
                <img
                  alt="image"
                  src="/android.svg"
                  className={styles['image16']}
                />
                <span>Download for Android</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer']}>
        <div className={styles['left1']}>
          <div className={styles['brand']}>
            <img alt="image" src="/logo-2.svg" className={styles['image17']} />
            <p className={styles['text42']}>
              Our cutting-edge drone technology guarantees quick and reliable
              deliveries of essential medical supplies to areas in need.
            </p>
          </div>
          <div className={styles['socials']}>
            <div className={projectStyles['social']}>
              <img
                alt="image"
                src="/insider.svg"
                className={styles['image18']}
              />
            </div>
            <div className={projectStyles['social']}>
              <img
                alt="image"
                src="/instagram.svg"
                className={styles['image19']}
              />
            </div>
            <div className={projectStyles['social']}>
              <img
                alt="image"
                src="/twitter.svg"
                className={styles['image20']}
              />
            </div>
          </div>
          <div className={styles['legal']}>
            <span className={styles['copyright']}>
              © 2022 finbest. All Rights Reserved.
            </span>
            <span className={projectStyles['legal-link']}>Privacy Policy</span>
            <span className={projectStyles['legal-link']}>Terms of Use</span>
          </div>
        </div>
        <div className={styles['right1']}>
          <div className={styles['list']}>
            <span className={styles['header14']}>Menu</span>
            <div className={styles['links1']}>
              <span className={styles['link06']}>Home</span>
              <span className={styles['link07']}>About</span>
              <span className={styles['link08']}>Services</span>
              <span className={styles['link09']}>Blog</span>
              <span className={styles['link10']}>Support</span>
            </div>
          </div>
          <div className={styles['list1']}>
            <span className={styles['header15']}>Resources</span>
            <div className={styles['links2']}>
              <span className={styles['link11']}>Test Results</span>
              <span className={styles['link12']}>Patients</span>
              <span className={styles['link13']}>Doctors</span>
              <span className={styles['link14']}>Health</span>
            </div>
          </div>
          <div className={styles['list2']}>
            <span className={styles['header16']}>Contact</span>
            <div className={styles['links3']}>
              <span className={styles['link15']}>
                24 Street Name, City FI 01234, RO
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className={styles['link16']}
              >
                contact@template.new
              </a>
              <a href="tel:(004) 234 - 5678" className={styles['link17']}>
                (004) 234 - 5678
              </a>
            </div>
          </div>
        </div>
        <div className={styles['legal1']}>
          <div className={styles['row']}>
            <span className={projectStyles['legal-link']}>Privacy Policy</span>
            <span className={projectStyles['legal-link']}>Terms of Use</span>
          </div>
          <span className={styles['copyright5']}>
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
      <div>
        <div className={styles['container3']}>
          <Script
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className={styles['container5']}>
          <Script
            html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className={styles['container7']}>
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
