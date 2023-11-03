import Image from "next/image";
import sideimg from "../../public/sidebar.png";
import applications from "../../public/applications.png";
import Link from "next/link";

export default function Sidebar() {
  // todo: shift the circle depending on the path or contect var
  return (
    <div className="min-h-screen w-80 bg-[#222020] flex-col rounded-r-3xl shadow-xl  ">
      <div className="flex logo gap-2 items-center mt-11 ml-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="37"
          viewBox="0 0 32 37"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.7837 28.0473L28.0575 29.935L32 27.6625V18.4414V9.21852L27.5987 6.68117C27.5987 12.8421 27.6686 18.9711 27.6686 25.1665L24.813 26.8127L24.8156 26.8273L24.8174 26.8325L24.8208 26.8524L24.8243 26.8705L24.8277 26.8903L24.8286 26.8938L24.8312 26.9093L24.8346 26.9283L24.8372 26.9473L24.839 26.9611L24.8398 26.9671L24.8424 26.9869L24.845 27.0068L24.8476 27.0258L24.8485 27.0275L24.8502 27.0456L24.8528 27.0646L24.8545 27.0844L24.8562 27.0939V27.1043L24.858 27.1241L24.8606 27.1431L24.8632 27.1828L24.864 27.2026L24.8649 27.2216L24.8658 27.2294L24.8666 27.2406L24.8675 27.2604L24.8683 27.2803L24.8692 27.2967V27.3001V27.32L24.8701 27.3389V27.3596V27.3631V27.3778V27.3967L24.8692 27.4166V27.4295V27.4347L24.8683 27.4546L24.8675 27.4744L24.8658 27.5132L24.8649 27.5322L24.864 27.552L24.8632 27.5633L24.8623 27.571L24.8614 27.5909L24.8588 27.6098L24.858 27.6288H24.8571L24.8554 27.6487L24.8537 27.6677L24.8511 27.6875C24.8398 27.7833 24.8234 27.879 24.8018 27.9731L24.7975 27.9929L24.794 28.011L24.7837 28.0473ZM4.33567 25.1665V21.8725L4.32099 21.8682L4.3158 21.8665L4.29766 21.8596L4.27951 21.8527L4.2605 21.8458L4.25791 21.8449L4.24236 21.8398L4.22421 21.8328L4.20607 21.8259L4.19484 21.8225L4.18793 21.819L4.16978 21.8121L4.15164 21.8044L4.13349 21.7975L4.13263 21.7966L4.11621 21.7888L4.09807 21.7819L4.07992 21.7733L4.07128 21.7699L4.06178 21.7664L4.04363 21.7578L4.02635 21.7492L4.00994 21.7423L4.00821 21.7414L3.99093 21.7319L3.97365 21.7241L3.9555 21.7155L3.94945 21.7121L3.93822 21.7052L3.92094 21.6965L3.90366 21.6879L3.88984 21.681L3.88638 21.6784L3.8691 21.6698L3.85268 21.6603L3.83627 21.6508L3.83195 21.6482L3.81899 21.6396L3.80257 21.631L3.78615 21.6206L3.76974 21.6103L3.75332 21.6008L3.7369 21.5904L3.72049 21.5792L3.71876 21.5783L3.70407 21.568L3.68765 21.5585L3.67124 21.5464L3.6626 21.5412L3.65482 21.5361L3.6384 21.5257L3.62285 21.5145L3.6073 21.5041L3.60644 21.5033L3.59088 21.4929L3.57533 21.4817L3.55892 21.4696L3.52867 21.4472L3.51312 21.4351L3.50016 21.4265L3.49757 21.4239L3.48288 21.4118L3.46819 21.3997L3.45264 21.3877L3.44919 21.3842L3.43795 21.3756L3.42326 21.3635L3.40858 21.3514L3.39821 21.3428L3.39389 21.3385L3.3792 21.3264L3.36451 21.3135L3.35069 21.3014L3.34809 21.2988L3.336 21.2885L3.32217 21.2746L3.30748 21.2617L3.29366 21.2488L3.27983 21.2358L0.0060488 23.1244V27.6685L16.0035 36.8914L20.4048 34.354C15.0599 31.2679 9.70904 28.263 4.33567 25.1665ZM16.0017 4.99017L18.8573 6.63717L18.872 6.62422L18.8867 6.61128L18.9014 6.59834L18.9161 6.58626L18.9195 6.58367L18.9316 6.57332L18.9463 6.56038L18.961 6.5483L18.9714 6.54054L18.9766 6.53622L18.9921 6.52414L19.0068 6.51293L19.0232 6.50085L19.0241 6.49999L19.0388 6.48877L19.0543 6.47669L19.0699 6.46548L19.0863 6.45512L19.1018 6.44305L19.1174 6.43269L19.133 6.42234L19.1338 6.42148L19.1502 6.41026L19.1666 6.39991L19.1822 6.38955L19.1891 6.3861L19.1995 6.3792L19.2159 6.36885L19.2323 6.3585L19.2461 6.34987L19.2487 6.34901L19.266 6.33951L19.2824 6.3283L19.2988 6.31881L19.3023 6.31622L19.3144 6.30932L19.3317 6.30069L19.349 6.29034L19.3654 6.28171L19.3827 6.27136L19.3999 6.26273L19.4172 6.2541L19.4198 6.25324L19.4345 6.24547L19.4518 6.23685L19.4863 6.21959L19.5045 6.21097L19.5399 6.19544V6.19457C19.6108 6.16265 19.6825 6.13418 19.755 6.10657L19.7732 6.10053L19.8095 6.08845L19.8276 6.08241L19.8466 6.07551L19.8492 6.07465L19.8829 6.0643L19.9011 6.05912L19.9123 6.05567L19.9192 6.05308L19.9382 6.0479V2.27163L15.9965 0L7.99741 4.61142L0 9.22198V14.2976C5.34745 11.2124 10.6284 8.08832 16.0017 4.99017Z"
            fill="url(#paint0_linear_229_280)"
          />
          <path
            d="M6.06834 24.1683L10.957 26.9869V21.5637C10.6477 21.467 10.4213 21.1771 10.4213 20.8355C10.4213 20.4145 10.2796 26.5564 10.7021 26.5564C11.1229 26.5564 11.8322 26.6315 11.8322 27.0534C11.8322 27.395 11.7242 21.467 11.4132 21.5637L10.9207 26.9688L13.2527 28.3087V21.5628C12.9417 21.4662 12.717 21.1763 12.717 20.8346C12.717 20.4136 13.0592 28.1836 13.4808 28.1836C13.9033 28.1836 14.2446 20.4136 14.2446 20.8346C14.2446 21.1763 14.0182 21.4653 13.7089 21.5628L13.1171 28.231L15.5476 29.6313V21.5628C15.2365 21.4662 15.0119 21.1763 15.0119 20.8346C15.0119 20.4136 15.1294 29.4458 15.551 29.4458C15.9727 29.4458 16.86 20.5655 16.5395 20.8346C16.2777 21.0538 16.3148 21.4653 16.0046 21.5628L15.4819 29.5924L22.0666 33.3894L26.398 30.8926L23.913 29.4596C23.7826 29.5726 23.6391 29.6744 23.4845 29.765C22.1591 30.5285 20.4639 30.0756 19.6992 28.7521C18.9345 27.4287 19.3881 25.7359 20.7136 24.9733C21.7806 24.359 23.0844 24.5324 23.9528 25.3123L25.9383 24.1675V18.5311L21.2346 21.2427C21.3054 21.5593 20.6081 21.807 20.8708 22.0692C21.1689 22.3669 25.9582 18.7036 25.7474 18.3387C25.5365 17.9737 19.7286 20.562 20.1079 20.7484C20.6652 21.0219 20.7671 20.6276 21.0065 20.8484L25.9374 18.6519V15.885L20.0871 19.2575C20.158 19.5742 19.853 19.6889 19.7234 20.084C19.592 20.4852 25.9988 16.0714 25.788 15.7064C25.5771 15.3415 18.366 18.7865 18.9604 18.764C19.3026 18.7511 19.6206 18.6432 19.859 18.8624L25.9383 15.9834V13.2372L18.9397 17.2715C19.0106 17.5881 18.6338 17.8021 18.576 18.098C18.4947 18.5112 25.9971 13.4374 25.7862 13.0724C25.5754 12.7084 17.4761 16.5243 17.813 16.778C18.3124 17.1533 18.4731 16.6572 18.7125 16.8772L25.9383 13.4236V5.72091L24.0012 4.60796L21.6052 3.22583V6.09104C21.7685 6.14798 21.9292 6.22045 22.0848 6.31017C23.4102 7.07457 23.8646 8.76643 23.0991 10.0899C22.3345 11.4125 20.6392 11.8663 19.3147 11.1019C18.2485 10.4876 17.7465 9.27287 17.9893 8.13231L16.0038 6.98744L11.1151 9.80519L15.8189 12.5177C16.0582 12.2977 16.4219 12.2468 16.7183 12.4185C17.0838 12.629 11.548 9.66974 11.3372 10.0338C11.1263 10.3988 16.021 14.1552 15.9545 13.7385C15.9156 13.4943 15.5199 13.2286 15.5908 12.912L11.16 9.77931L8.82026 11.1295L14.6697 14.502C14.909 14.282 15.2719 14.232 15.5692 14.4028C15.9338 14.6133 8.95159 10.9803 8.74077 11.3443C8.52995 11.7093 15.1708 15.9333 14.8054 15.722C14.5099 15.5511 14.3707 15.2112 14.4425 14.8954L8.87296 11.0976L6.52455 12.4504L13.5231 16.4855C13.7625 16.2646 14.2126 16.1723 14.509 16.3431C14.8745 16.5537 6.85374 12.2735 6.64378 12.6385C6.43296 13.0026 14.0251 17.9168 13.6597 17.7063C13.3633 17.5355 13.2251 17.1955 13.2959 16.8789L6.54096 12.4418L0.00634766 16.2085V21.203L2.49128 19.7709C2.45931 19.6018 2.44203 19.4258 2.44203 19.248C2.44203 17.7192 3.68191 16.4812 5.21296 16.4812C6.74228 16.4812 7.98302 17.7201 7.98302 19.248C7.98302 20.4766 7.18034 21.5188 6.07007 21.8794V24.1683H6.06834Z"
            fill="url(#paint1_linear_229_280)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.9414 28.036C21.3095 28.6719 22.126 28.891 22.7637 28.5235C23.4013 28.156 23.6199 27.3407 23.2518 26.7039C22.8838 26.0672 22.0673 25.8498 21.4296 26.2165C20.7928 26.5832 20.5742 27.4002 20.9414 28.036ZM21.8538 9.37208C22.2219 8.7345 22.0024 7.92006 21.3648 7.55167C20.728 7.185 19.9106 7.40327 19.5434 8.03999C19.1754 8.67584 19.394 9.492 20.0316 9.85953C20.6693 10.2271 21.4858 10.0088 21.8538 9.37208ZM5.21101 17.9151C4.47399 17.9151 3.87695 18.5112 3.87695 19.2472C3.87695 19.9831 4.47399 20.5784 5.21101 20.5784C5.94802 20.5784 6.5442 19.9822 6.5442 19.2472C6.5442 18.5112 5.94715 17.9151 5.21101 17.9151Z"
            fill="url(#paint2_linear_229_280)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_229_280"
              x1="0.0294891"
              y1="17.8169"
              x2="18.0535"
              y2="18.5236"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01E8FB" />
              <stop offset="1" stop-color="#B562D3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_229_280"
              x1="0.00530219"
              y1="18.3083"
              x2="26.3962"
              y2="18.3083"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01E8FB" />
              <stop offset="1" stop-color="#B562D3" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_229_280"
              x1="3.87668"
              y1="18.0377"
              x2="23.4308"
              y2="18.0377"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01E8FB" />
              <stop offset="1" stop-color="#B562D3" />
            </linearGradient>
          </defs>
        </svg>

        <h1 className="font-Poppins text-xs font-semibold w-24 text-white">
          BLOCKCHAIN CLUB SRM
        </h1>
      </div>

      <div className="links relative  flex flex-col ">
        <Image className=" z-0 backblur -mt-8 absolute " src={sideimg} />

        <div className="home z-10 mt-20 ml-9 items-center gap-6  flex">
          <div className=" flex items-center justify-center z-0  circle w-10 h-10 rounded-full border-2  border-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_267_1902)">
                <path
                  opacity="0.3"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7358 20.9962C6.8874 20.8564 3 16.8822 3 12C3 11.9168 3.00113 11.8339 3.00337 11.7513C3.66233 11.8143 4.85637 11.9574 4.91263 12.4204C4.99049 13.0609 4.91263 13.8616 5.45805 14.1018C6.00346 14.342 6.15932 13.1409 6.62675 13.4613C7.09418 13.7816 8.34087 14.0899 8.34087 14.6562C8.34087 15.2224 8.10715 16.1035 8.34087 16.2636C8.57458 16.4238 9.50897 17.5446 9.50921 17.7048C9.50957 17.865 9.83857 18.6794 9.7404 18.9907C9.65905 19.2487 9.24858 20.0502 8.8506 20.4146C9.75315 20.7621 10.7236 20.9658 11.7358 20.9961V20.9962ZM8.28273 3.80112C9.41584 3.28656 10.6745 3 12 3C15.5115 3 18.5532 5.01097 20.0364 7.94408C20.0697 8.72412 20.0638 9.39135 20.2361 9.63274C21.1132 10.8601 18.0995 11.7043 18.5573 13.5605C18.759 14.3795 16.5528 14.1197 16.014 14.8864C15.4748 15.6527 14.1575 15.1378 13.852 14.9905C13.5466 14.8432 12.3766 15.3341 12.4789 14.4995C12.5806 13.6646 13.2923 13.6156 14.0556 13.272C14.8185 12.9287 15.9189 11.7872 15.3782 11.638C12.8323 10.9362 11.9638 8.47852 11.9638 8.47852C11.811 8.44901 11.8494 6.74109 11.1884 6.69207C10.5267 6.6428 10.1705 6.88841 9.20436 6.69207C8.23765 6.49573 8.44144 5.85744 8.28872 4.48256C8.25454 4.17416 8.25619 3.95717 8.28273 3.80112ZM20.9992 11.877C20.9997 11.918 21 11.9589 21 12C21 16.9407 17.0188 20.9515 12.0895 20.9996C16.9702 20.9503 20.9337 16.8884 20.9992 11.877Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_267_1902">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <Link
            href="/student/dashboard"
            className="cursor-pointer text-white text-lg mt-px font-bold "
          >
            {" "}
            Home{" "}
          </Link>
        </div>

        <div className="Applications z-10 mt-10 ml-9 items-center gap-6  flex">
          <div className=" flex items-center justify-center z-0  circle w-10 h-10 rounded-full border-2  border-[#282830] ">
            <Image src={applications} />
          </div>
          <Link
            href="/student/applications"
            className="cursor-pointer text-white text-lg mt-px font-bold "
          >
            {" "}
            Applications{" "}
          </Link>
        </div>

        <div className="Profile z-10 mt-10 ml-9 items-center gap-6  flex">
          <div className=" flex items-center justify-center z-0  circle w-10 h-10 rounded-full border-2  border-[#282830] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                stroke="#E0E0E8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
                stroke="#E0E0E8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <Link
            href="/"
            className="cursor-pointer text-white text-lg mt-px font-bold "
          >
            {" "}
            Profile{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
