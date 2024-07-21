import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      {/* <div className="outlineDotsSkills"></div> */}
      <motion.div
        className="skillsTitle"
        initial={{ x: -200 }}
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0 }}
      >
        SKILLS
      </motion.div>

      <div className="individualSkill">
        <div className="skill">
          <div className="icon">
            <svg
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.4137 83C41.1335 83 40.8534 82.955 40.5837 82.8651L13.083 73.5968C12.1077 73.2682 11.4195 72.3933 11.3296 71.3696L5.19798 2.82546C5.13227 2.09921 5.37782 1.38333 5.8689 0.843833C6.35998 0.304333 7.05511 0 7.78136 0H75.2189C75.9451 0 76.6402 0.304333 77.1313 0.843833C77.6224 1.38333 77.8645 2.09921 77.8022 2.82546L71.6741 71.3696C71.5842 72.3967 70.889 73.2717 69.9138 73.5968L42.2367 82.8651C41.9704 82.955 41.6903 83 41.4137 83ZM16.3442 69.222L41.4171 77.6707L66.6595 69.2185L72.383 5.1875H10.6206L16.3442 69.222Z"
                fill="#EA3D3C"
              />
              <path
                d="M40.6355 65.7084C40.3 65.7084 39.9611 65.6427 39.6429 65.5113L24.9692 59.4454C24.1254 59.0961 23.5271 58.3318 23.3922 57.4292L22.5034 51.3909C22.2959 49.973 23.2747 48.6554 24.6926 48.4444C26.1001 48.2265 27.4281 49.2156 27.6391 50.6335L28.3134 55.2158L40.6355 60.31L52.9333 55.2262L54.9703 39.7709H24.0701C22.6764 39.7709 21.5282 38.6677 21.4763 37.2705L20.7501 17.3851C20.7259 16.6831 20.9887 15.9983 21.4763 15.49C21.9674 14.985 22.6383 14.698 23.3438 14.698H59.6563C61.0881 14.698 62.2501 15.86 62.2501 17.2917C62.2501 18.7235 61.0881 19.8855 59.6563 19.8855H26.0344L26.5704 34.5834H57.9272C58.6742 34.5834 59.3831 34.905 59.8777 35.4653C60.3722 36.029 60.597 36.7725 60.5002 37.5161L57.8822 57.3877C57.7612 58.3076 57.1594 59.0926 56.3017 59.4454L41.628 65.5113C41.3099 65.6427 40.9709 65.7084 40.6355 65.7084Z"
                fill="#EA3D3C"
              />
            </svg>
          </div>
          <div className="iconText">HTML</div>
        </div>

        <div className="skill">
          <div className="icon">
            <svg
              width="83"
              height="88"
              viewBox="0 0 83 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.78125 5.21484L13.9233 75.6148L41.5 83.4371L69.0664 75.6201L75.2188 5.21484H7.78125Z"
                stroke="#EA3D3C"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.3438 20.8594H59.6562L57.0625 59.9705L41.5 65.1853L25.9375 59.9705V54.7557M58.2556 41.7186H23.9662"
                stroke="#EA3D3C"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="iconText"> CSS</div>
        </div>
        <div className="skill">
          <div className="icon">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 55 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8541 38.0834C6.53517 38.0834 1.90792 34.3069 0.842752 29.1056C0.690585 28.362 0.614502 27.6047 0.614502 26.8438C0.614502 25.4121 1.7765 24.2501 3.20825 24.2501C4.64 24.2501 5.802 25.4121 5.802 26.8438C5.802 27.2554 5.8435 27.6669 5.9265 28.0681C6.49713 30.8659 8.99059 32.8959 11.8541 32.8959C15.1914 32.8959 17.9062 30.1811 17.9062 26.8438V2.6355C17.9062 1.20375 19.0682 0.041748 20.4999 0.041748C21.9317 0.041748 23.0937 1.20375 23.0937 2.6355V26.8438C23.0937 33.0412 18.0514 38.0834 11.8541 38.0834ZM42.1145 38.0834C35.4399 38.0834 30.0103 33.4285 30.0103 27.7084C30.0103 26.2767 31.1723 25.1147 32.6041 25.1147C34.0358 25.1147 35.1978 26.2767 35.1978 27.7084C35.1978 30.52 38.3657 32.8959 42.1145 32.8959C45.8633 32.8959 49.0312 30.52 49.0312 27.7084C49.0312 25.1631 46.4512 23.0881 41.3606 21.5457C34.0428 19.322 30.0103 15.3725 30.0103 10.4167C30.0103 4.69666 35.4399 0.041748 42.1145 0.041748C48.7891 0.041748 54.2187 4.69666 54.2187 10.4167C54.2187 11.8485 53.0567 13.0105 51.6249 13.0105C50.1932 13.0105 49.0312 11.8485 49.0312 10.4167C49.0312 7.60512 45.8633 5.22925 42.1145 5.22925C38.3657 5.22925 35.1978 7.60512 35.1978 10.4167C35.1978 13.754 40.0049 15.7115 42.8684 16.5795C52.2509 19.4257 54.2187 24.2017 54.2187 27.7084C54.2187 33.4285 48.7891 38.0834 42.1145 38.0834Z"
                fill="#EA3D3C"
              />
            </svg>
          </div>
          <div className="iconText"> JAVASCRIPT</div>
        </div>
        <div className="skill">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 128 128"
              viewBox="0 0 128 128"
              id="react"
            >
              <g fill="#ea3d3c">
                <circle cx="64" cy="64" r="11.4"></circle>
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
              </g>
            </svg>
          </div>
          <div className="iconText"> REACT JS</div>
        </div>
        <div className="skill">
          <div className="icon">
            <svg
              fill="#ea3d3c"
              width="100px"
              height="100px"
              viewBox="-3.2 -3.2 38.40 38.40"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ea3d3c"
              strokeWidth="0.00032"
              transform="rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.8320000000000001"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>{' '}
              </g>
            </svg>
          </div>
          <div className="iconText"> NEXT JS</div>
        </div>
        <div className="skill">
          <div className="icon">
            <svg
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9_55)">
                <path
                  d="M80.4062 83H2.59375C1.162 83 0 81.838 0 80.4062V2.59375C0 1.162 1.162 0 2.59375 0H80.4062C81.838 0 83 1.162 83 2.59375V80.4062C83 81.838 81.838 83 80.4062 83ZM5.1875 77.8125H77.8125V5.1875H5.1875V77.8125Z"
                  fill="#EA3D3C"
                />
                <path
                  d="M45.7607 43.2292H19.8232C18.3915 43.2292 17.2295 42.0672 17.2295 40.6355C17.2295 39.2037 18.3915 38.0417 19.8232 38.0417H45.7607C47.1925 38.0417 48.3545 39.2037 48.3545 40.6355C48.3545 42.0672 47.1925 43.2292 45.7607 43.2292Z"
                  fill="#EA3D3C"
                />
                <path
                  d="M32.792 76.0834C31.3602 76.0834 30.1982 74.9214 30.1982 73.4897V40.8568C30.1982 39.4251 31.3602 38.2631 32.792 38.2631C34.2237 38.2631 35.3857 39.4251 35.3857 40.8568V73.4897C35.3857 74.9214 34.2237 76.0834 32.792 76.0834ZM63.1147 76.0834C58.6569 76.0834 54.576 74.0015 52.463 70.6573C51.6987 69.4434 52.0618 67.8457 53.2722 67.0779C54.4792 66.3171 56.0839 66.6767 56.8482 67.8872C57.9998 69.7132 60.4587 70.8959 63.1112 70.8959C66.86 70.8959 70.0279 68.52 70.0279 65.7084C70.0279 63.1631 67.4479 61.0881 62.3573 59.5457C55.0429 57.322 51.0105 53.3725 51.0105 48.4167C51.0105 42.6967 56.4401 38.0417 63.1147 38.0417C65.4559 38.0417 67.7281 38.6124 69.6855 39.6948C70.9409 40.383 71.3974 41.9635 70.7022 43.2189C70.014 44.4742 68.4336 44.9307 67.1782 44.2356C65.9885 43.582 64.581 43.2327 63.1147 43.2327C59.3658 43.2327 56.198 45.6086 56.198 48.4202C56.198 51.7575 61.0051 53.7149 63.8686 54.583C73.251 57.4292 75.2188 62.2051 75.2188 65.7119C75.2188 71.4285 69.7892 76.0834 63.1147 76.0834Z"
                  fill="#EA3D3C"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_55">
                  <rect width="83" height="83" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="iconText"> TYPESCRIPT</div>
        </div>

        <div className="skill">
          <div className="icon">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ea3d3c"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>file_type_sass</title>
                <path
                  d="M26.11,17.572a5.8,5.8,0,0,0-2.537.588,5.345,5.345,0,0,1-.568-1.314,3.53,3.53,0,0,1-.051-1.1,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256a6.171,6.171,0,0,0-.235.834,19.686,19.686,0,0,1-1.713,3.294,3.186,3.186,0,0,1-.44-2.066,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256-.118.5-.235.834-1.483,3.386-1.841,4.173c-.184.4-.343.726-.455.946h0a.233.233,0,0,1-.02.041c-.1.189-.153.292-.153.292v.005c-.077.138-.159.266-.2.266a1.711,1.711,0,0,1,.01-.869c.2-1.059.69-2.705.685-2.762,0-.031.092-.317-.317-.465a.508.508,0,0,0-.578.1c-.036,0-.061.087-.061.087s.445-1.851-.849-1.851a3.855,3.855,0,0,0-2.475,1.683c-.348.189-1.089.593-1.882,1.028-.3.169-.614.338-.905.5-.02-.02-.041-.046-.061-.066C6.87,17.6,3.975,16.416,4.1,14.171c.046-.818.327-2.966,5.559-5.575,4.306-2.122,7.733-1.534,8.326-.23.849,1.862-1.836,5.319-6.285,5.82a3.351,3.351,0,0,1-2.813-.711c-.235-.256-.271-.271-.358-.22-.143.077-.051.307,0,.44a2.626,2.626,0,0,0,1.606,1.263,8.55,8.55,0,0,0,5.217-.517c2.7-1.043,4.8-3.943,4.184-6.372-.619-2.465-4.71-3.278-8.582-1.9A19.5,19.5,0,0,0,4.359,9.952c-2.133,1.995-2.47,3.728-2.332,4.455.5,2.578,4.051,4.255,5.472,5.5-.072.041-.138.077-.194.107-.711.353-3.421,1.77-4.1,3.268-.767,1.7.123,2.915.711,3.079a4.374,4.374,0,0,0,4.71-1.908A4.725,4.725,0,0,0,9.049,20.1a.107.107,0,0,0-.02-.031l.557-.327c.363-.215.721-.414,1.028-.578a6.74,6.74,0,0,0-.363,1.862,3.886,3.886,0,0,0,.834,2.7.921.921,0,0,0,.675.22c.6,0,.875-.5,1.176-1.094.368-.726.7-1.57.7-1.57s-.414,2.281.711,2.281c.409,0,.823-.532,1.008-.8v.005s.01-.015.031-.051l.066-.107v-.01c.164-.286.532-.936,1.079-2.015.706-1.391,1.386-3.13,1.386-3.13a8.888,8.888,0,0,0,.271,1.13,10.643,10.643,0,0,0,.583,1.309c-.164.23-.266.358-.266.358l.005.005c-.133.174-.276.363-.435.547a16.3,16.3,0,0,0-1.314,1.647.447.447,0,0,0,.123.6,1.116,1.116,0,0,0,.685.113,3.147,3.147,0,0,0,1.028-.235,3.45,3.45,0,0,0,.885-.465,1.98,1.98,0,0,0,.849-1.744,3.521,3.521,0,0,0-.322-1.233c.051-.072.1-.143.148-.215a23.428,23.428,0,0,0,1.534-2.649,8.888,8.888,0,0,0,.271,1.13,7.57,7.57,0,0,0,.5,1.125A4.861,4.861,0,0,0,20.965,20.8c-.322.931-.072,1.35.4,1.447a1.425,1.425,0,0,0,.747-.153,3.4,3.4,0,0,0,.946-.486,2.126,2.126,0,0,0,1.043-1.729,3.268,3.268,0,0,0-.235-1.023,5.356,5.356,0,0,1,2.716-.312c2.434.286,2.915,1.805,2.823,2.445a1.618,1.618,0,0,1-.772,1.094c-.169.107-.225.143-.21.22.02.113.1.107.245.087A1.9,1.9,0,0,0,30,20.7c.077-1.5-1.355-3.145-3.887-3.13ZM7.33,23.9c-.808.88-1.933,1.212-2.419.931-.522-.3-.317-1.6.675-2.532a12.884,12.884,0,0,1,1.9-1.417c.118-.072.292-.174.5-.3l.056-.031h0l.123-.077A3.493,3.493,0,0,1,7.33,23.9Zm5.881-4c-.281.685-.869,2.44-1.227,2.342-.307-.082-.5-1.412-.061-2.726a6.193,6.193,0,0,1,.956-1.754c.44-.491.926-.655,1.043-.455a9.062,9.062,0,0,1-.711,2.593Zm4.853,2.322c-.118.061-.23.1-.281.072-.036-.02.051-.1.051-.1s.609-.655.849-.951c.138-.174.3-.378.476-.609V20.7c0,.782-.757,1.309-1.094,1.524Zm3.744-.854c-.087-.061-.072-.266.22-.905a3.408,3.408,0,0,1,.834-1.074,1.448,1.448,0,0,1,.082.471,1.547,1.547,0,0,1-1.135,1.509Z"
                  /* style="fill:#ea3d3c" */
                ></path>
              </g>
            </svg>
          </div>
          <div className="iconText">SASS</div>
        </div>
        {/*  <div className="skill">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="64"
              height="64"
              fill="#ea3d3c"
            >
              <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
            </svg>
          </div>
          <div className="iconText">EXPRESS</div>
        </div> */}
        <div className="skill">
          <div className="icon">
            <svg
              width="100px"
              height="100px"
              viewBox="0 -183.5 512 512"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
              fill="#ea3d3c"
              className="node"
            >
              <g fill="#ea3d3c">
                <path d="M471.05 51.611c-1.244 0-2.454.257-3.525.863l-33.888 19.57c-2.193 1.264-3.526 3.65-3.526 6.189v39.069c0 2.537 1.333 4.92 3.526 6.187l8.85 5.109c4.3 2.119 5.885 2.086 7.842 2.086 6.366 0 10.001-3.863 10.001-10.576V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.39-1.007.935v38.566c0 2.975-3.1 5.968-8.13 3.453l-9.21-5.396c-.326-.177-.576-.49-.576-.863v-39.07c0-.37.247-.747.576-.935L470.547 57.8a.998.998 0 0 1 1.007 0l33.817 19.498c.322.194.576.553.576.936v39.069c0 .373-.188.755-.504.935l-33.889 19.498c-.29.173-.69.173-1.007 0l-8.706-5.18a.905.905 0 0 0-.863 0c-2.403 1.362-2.855 1.52-5.109 2.302-.555.194-1.398.495.288 1.44l11.368 6.69a6.995 6.995 0 0 0 3.526.936 6.949 6.949 0 0 0 3.525-.935l33.889-19.499c2.193-1.275 3.525-3.65 3.525-6.187v-39.07c0-2.538-1.332-4.92-3.525-6.187l-33.889-19.57c-1.062-.607-2.28-.864-3.525-.864z" />

                <path d="M480.116 79.528c-9.65 0-15.397 4.107-15.397 10.937 0 7.408 5.704 9.444 14.966 10.36 11.08 1.085 11.943 2.712 11.943 4.893 0 3.783-3.016 5.396-10.144 5.396-8.957 0-10.925-2.236-11.584-6.691-.078-.478-.447-.864-.936-.864h-4.389c-.54 0-1.007.466-1.007 1.008 0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.209 16.908-11.584 0-7.31-4.996-9.273-15.398-10.648-10.51-1.391-11.512-2.072-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.954 0 9.524 1.5 10.577 6.189.092.44.48.791.935.791h4.39c.27 0 .532-.166.719-.36.184-.207.314-.44.288-.719-.68-8.074-6.064-11.872-16.909-11.872z" />
              </g>

              <path
                d="M271.821.383a2.181 2.181 0 0 0-1.08.287 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.251 1.024-.719 1.295a1.501 1.501 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0l-35.903 20.721c-1.342.775-2.158 2.264-2.158 3.814v41.443c0 1.548.817 2.966 2.158 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.308 4.308 0 0 0 2.159-3.741V16.356a4.386 4.386 0 0 0-2.23-3.814L272.9.598c-.335-.187-.707-.22-1.079-.215zM40.861 52.115c-.684.027-1.328.147-1.942.503L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.929 132.7c0 .773.399 1.492 1.079 1.87a2.096 2.096 0 0 0 2.159 0l21.297-12.231c1.349-.802 2.23-2.196 2.23-3.742V92.623c0-1.55.815-2.972 2.159-3.742l9.065-5.252a4.251 4.251 0 0 1 2.159-.576c.74 0 1.5.185 2.158.576l9.066 5.252a4.296 4.296 0 0 1 2.159 3.742v25.973c0 1.546.89 2.95 2.23 3.742l21.297 12.232a2.096 2.096 0 0 0 2.159 0 2.164 2.164 0 0 0 1.08-1.871l.07-55.618a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.475-1.942-.503h-.432zm322.624.503c-.75 0-1.485.19-2.158.576l-35.903 20.722a4.306 4.306 0 0 0-2.159 3.741V119.1c0 1.559.878 2.971 2.23 3.742l35.616 20.29c1.315.75 2.921.807 4.245.07l21.585-12.015c.685-.38 1.148-1.09 1.151-1.87a2.126 2.126 0 0 0-1.079-1.871l-36.119-20.722c-.676-.386-1.151-1.167-1.151-1.943v-12.95c0-.775.48-1.485 1.151-1.871l11.224-6.476a2.155 2.155 0 0 1 2.159 0L375.5 89.96a2.152 2.152 0 0 1 1.08 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.389 1.487.39 2.158 0L401.331 91.4a4.325 4.325 0 0 0 2.159-3.742v-10c0-1.545-.82-2.966-2.159-3.742l-35.687-20.722a4.279 4.279 0 0 0-2.159-.575zm-107.35 30.939c.188 0 .408.046.576.143l12.304 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.936l-12.304 7.123a1.088 1.088 0 0 1-1.079 0l-12.303-7.123c-.335-.194-.576-.549-.576-.936V91.758c0-.386.242-.74.576-.935l12.303-7.122a.948.948 0 0 1 .504-.143v-.001z"
                fill="black"
              />

              <path
                d="M148.714 52.402c-.748 0-1.488.19-2.158.576l-35.903 20.65c-1.343.773-2.159 2.265-2.159 3.813v41.443c0 1.55.817 2.966 2.159 3.742l35.903 20.721a4.297 4.297 0 0 0 4.317 0l35.903-20.721a4.308 4.308 0 0 0 2.158-3.742V77.441c0-1.55-.816-3.04-2.158-3.813l-35.903-20.65a4.297 4.297 0 0 0-2.159-.576zM363.413 89.385c-.143 0-.302 0-.431.072l-6.907 4.029a.84.84 0 0 0-.432.72v7.914c0 .298.172.571.432.72l6.907 3.957c.259.15.535.15.791 0l6.907-3.958a.846.846 0 0 0 .432-.719v-7.915a.846.846 0 0 0-.432-.719l-6.907-4.03c-.128-.075-.216-.07-.36-.07z"
                fill="#ea3d3c"
              />
            </svg>
          </div>
          <div className="iconText">NODE</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
