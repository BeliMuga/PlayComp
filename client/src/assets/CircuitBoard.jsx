import React from "react";
import * as motion from "motion/react-client";

// import { motion } from "framer-motion";
import "../styles/assets/CircuitBoard.css";

const pathWriter = {
  hidden: { pathLength: 0 },
  visible: (i) => ({
    pathLength: 1,
    transition: {
      duration: 9,
      ease: "circInOut",
      delay: i * 0.7, // Each path gets a delay based on its index
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

function CircuitBoard() {
  return (
    <motion.svg
      className={"circuitBoardsvg"}
      width="1216"
      height="905"
      viewBox="0 0 1216 905"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      transition={{ duration: 5 }}
    >
      <g id="CircuitBoard">
        <motion.g id="Rectangles">
          <path
            id="Rectangle 1"
            d="M238 323H297C299.209 323 301 324.791 301 327V384H242C239.791 384 238 382.209 238 380V323Z"
            stroke="black"
            strokeWidth="2"
          />
          <motion.path
            id="Rectangle-2"
            d="M696 344H755C757.209 344 759 345.791 759 348V403C759 405.209 757.209 407 755 407H700C697.791 407 696 405.209 696 403V344Z"
            stroke="black"
            strokeWidth="2"
            animate={{
              scale: [1.2, 1.1, 1, 1.1, 1.2],
              stroke: [
                "#2A0034",
                "#94b959",
                "#2A0034",
                "#2A0034",
              ],
              fill: "#2A0034",
              zIndex: 6,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ position: "relative" }}
          />
          <path
            id="Rectangle 3"
            d="M939 478H1010C1012.21 478 1014 479.791 1014 482V550C1014 552.209 1012.21 554 1010 554H943C940.791 554 939 552.209 939 550V478Z"
            stroke="black"
            strokeWidth="2"
          />
          <g id="Rectangle 30">
            <mask
              id="path-380-inside-1_1_3"
              fill="white"
            >
              <path d="M350 220H380C382.761 220 385 222.239 385 225V250C385 252.761 382.761 255 380 255H355C352.239 255 350 252.761 350 250V220Z" />
            </mask>
            <path
              d="M348 217H380C383.866 217 387 220.134 387 224L383 225C383 223.895 381.657 223 380 223H352L348 217ZM387 250C387 253.866 383.866 257 380 257H355C351.134 257 348 253.866 348 250H352C352 251.657 353.343 253 355 253H380C381.657 253 383 251.657 383 250H387ZM355 257C351.134 257 348 253.866 348 250V217L352 223V250C352 251.657 353.343 253 355 253V257ZM380 217C383.866 217 387 220.134 387 224V250C387 253.866 383.866 257 380 257V253C381.657 253 383 251.657 383 250V225C383 223.895 381.657 223 380 223V217Z"
              fill="black"
              mask="url(#path-380-inside-1_1_3)"
            />
          </g>
          <g id="Rectangle 4">
            <mask
              id="path-382-inside-2_1_3"
              fill="white"
            >
              <path d="M367 680H439C441.761 680 444 682.239 444 685V753C444 755.761 441.761 758 439 758H372C369.239 758 367 755.761 367 753V680Z" />
            </mask>
            <path
              d="M365 678H441C444.866 678 448 681.134 448 685H440C440 683.343 439.552 682 439 682H369L365 678ZM448 753C448 756.866 444.866 760 441 760H372C368.134 760 365 756.866 365 753H369C369 754.657 370.343 756 372 756H439C439.552 756 440 754.657 440 753H448ZM372 760C368.134 760 365 756.866 365 753V678L369 682V753C369 754.657 370.343 756 372 756V760ZM441 678C444.866 678 448 681.134 448 685V753C448 756.866 444.866 760 441 760L439 756C439.552 756 440 754.657 440 753V685C440 683.343 439.552 682 439 682L441 678Z"
              fill="black"
              mask="url(#path-382-inside-2_1_3)"
            />
          </g>
          <path
            id="Rectangle 12"
            d="M1143 794C1143 791.791 1144.79 790 1147 790H1181C1183.21 790 1185 791.791 1185 794V822C1185 824.209 1183.21 826 1181 826H1147C1144.79 826 1143 824.209 1143 822V794Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 13"
            d="M649.143 271.595C645.829 271.62 643.123 268.954 643.098 265.64L643.007 253.641L655.007 253.55C658.321 253.525 661.027 256.191 661.052 259.505L661.097 265.505C661.122 268.818 658.456 271.525 655.143 271.55L649.143 271.595Z"
            stroke="black"
            strokeWidth="2"
          />
          <g id="Rectangle 19">
            <mask
              id="path-386-inside-3_1_3"
              fill="white"
            >
              <path d="M441 247C441 243.134 444.134 240 448 240H459C462.866 240 466 243.134 466 247V258C466 261.866 462.866 265 459 265H448C444.134 265 441 261.866 441 258V247Z" />
            </mask>
            <path
              d="M439 247C439 242.029 443.029 238 448 238H459C463.971 238 468 242.029 468 247H464C464 244.239 461.761 242 459 242H448C445.239 242 443 244.239 443 247H439ZM466 265H441H466ZM448 265C443.029 265 439 260.971 439 256V247C439 242.029 443.029 238 448 238V242C445.239 242 443 244.239 443 247V258C443 261.866 445.239 265 448 265ZM459 238C463.971 238 468 242.029 468 247V256C468 260.971 463.971 265 459 265C461.761 265 464 261.866 464 258V247C464 244.239 461.761 242 459 242V238Z"
              fill="black"
              mask="url(#path-386-inside-3_1_3)"
            />
          </g>
          <g id="Rectangle 31">
            <mask
              id="path-388-inside-4_1_3"
              fill="white"
            >
              <path d="M598 870C598 873.866 594.866 877 591 877H580C576.134 877 573 873.866 573 870V859C573 855.134 576.134 852 580 852H591C594.866 852 598 855.134 598 859V870Z" />
            </mask>
            <path
              d="M600 870C600 874.971 595.971 879 591 879H580C575.029 879 571 874.971 571 870H575C575 872.761 577.239 875 580 875H591C593.761 875 596 872.761 596 870H600ZM573 852H598H573ZM591 852C595.971 852 600 856.029 600 861V870C600 874.971 595.971 879 591 879V875C593.761 875 596 872.761 596 870V859C596 855.134 593.761 852 591 852ZM580 879C575.029 879 571 874.971 571 870V861C571 856.029 575.029 852 580 852C577.239 852 575 855.134 575 859V870C575 872.761 577.239 875 580 875V879Z"
              fill="black"
              mask="url(#path-388-inside-4_1_3)"
            />
          </g>
          <path
            id="Rectangle 15"
            d="M677.142 271.339C673.828 271.364 671.122 268.698 671.097 265.384L671.007 253.384L683.006 253.294C686.32 253.269 689.026 255.935 689.051 259.249L689.096 265.248C689.121 268.562 686.455 271.268 683.142 271.293L677.142 271.339Z"
            stroke="black"
            strokeWidth="2"
          />
          <g id="Rectangle 20">
            <mask
              id="path-391-inside-5_1_3"
              fill="white"
            >
              <path d="M441 281C441 277.134 444.134 274 448 274H459C462.866 274 466 277.134 466 281V292C466 295.866 462.866 299 459 299H448C444.134 299 441 295.866 441 292V281Z" />
            </mask>
            <path
              d="M439 281C439 276.029 443.029 272 448 272H459C463.971 272 468 276.029 468 281H464C464 278.239 461.761 276 459 276H448C445.239 276 443 278.239 443 281H439ZM466 299H441H466ZM448 299C443.029 299 439 294.971 439 290V281C439 276.029 443.029 272 448 272V276C445.239 276 443 278.239 443 281V292C443 295.866 445.239 299 448 299ZM459 272C463.971 272 468 276.029 468 281V290C468 294.971 463.971 299 459 299C461.761 299 464 295.866 464 292V281C464 278.239 461.761 276 459 276V272Z"
              fill="black"
              mask="url(#path-391-inside-5_1_3)"
            />
          </g>
          <path
            id="Rectangle 17"
            d="M704.141 271.097C700.828 271.122 698.121 268.456 698.096 265.143L698.006 253.143L710.005 253.053C713.319 253.028 716.025 255.694 716.05 259.007L716.096 265.007C716.121 268.321 713.455 271.027 710.141 271.052L704.141 271.097Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 21"
            d="M442 313C442 309.686 444.686 307 448 307H459C462.314 307 465 309.686 465 313V324C465 327.314 462.314 330 459 330H448C444.686 330 442 327.314 442 324V313Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 14"
            d="M1070 313C1070 309.686 1072.69 307 1076 307H1087C1090.31 307 1093 309.686 1093 313V324C1093 327.314 1090.31 330 1087 330H1076C1072.69 330 1070 327.314 1070 324V313Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 27"
            d="M1036 313C1036 309.686 1038.69 307 1042 307H1053C1056.31 307 1059 309.686 1059 313V324C1059 327.314 1056.31 330 1053 330H1042C1038.69 330 1036 327.314 1036 324V313Z"
            stroke="black"
            strokeWidth="2"
          />
          <g id="Rectangle 22">
            <mask
              id="path-397-inside-6_1_3"
              fill="white"
            >
              <path d="M474 247C474 243.134 477.134 240 481 240H492C495.866 240 499 243.134 499 247V258C499 261.866 495.866 265 492 265H481C477.134 265 474 261.866 474 258V247Z" />
            </mask>
            <path
              d="M472 247C472 242.029 476.029 238 481 238H492C496.971 238 501 242.029 501 247H497C497 244.239 494.761 242 492 242H481C478.239 242 476 244.239 476 247H472ZM499 265H474H499ZM481 265C476.029 265 472 260.971 472 256V247C472 242.029 476.029 238 481 238V242C478.239 242 476 244.239 476 247V258C476 261.866 478.239 265 481 265ZM492 238C496.971 238 501 242.029 501 247V256C501 260.971 496.971 265 492 265C494.761 265 497 261.866 497 258V247C497 244.239 494.761 242 492 242V238Z"
              fill="black"
              mask="url(#path-397-inside-6_1_3)"
            />
          </g>
          <g id="Rectangle 38">
            <mask
              id="path-399-inside-7_1_3"
              fill="white"
            >
              <path d="M447 356C450.866 356 454 359.134 454 363V371C454 374.866 450.866 378 447 378H406C402.134 378 399 374.866 399 371V363C399 359.134 402.134 356 406 356H447Z" />
            </mask>
            <path
              d="M447 354C451.971 354 456 358.029 456 363V371C456 375.971 451.971 380 447 380V376C449.761 376 452 373.761 452 371V363C452 360.239 449.761 358 447 358V354ZM399 378V356V378ZM399 363C399 358.029 403.029 354 408 354H447C451.971 354 456 358.029 456 363H452C452 360.239 449.761 358 447 358H406C402.134 358 399 360.239 399 363ZM456 371C456 375.971 451.971 380 447 380H408C403.029 380 399 375.971 399 371C399 373.761 402.134 376 406 376H447C449.761 376 452 373.761 452 371H456Z"
              fill="black"
              mask="url(#path-399-inside-7_1_3)"
            />
          </g>
          <g id="Rectangle 32">
            <mask
              id="path-401-inside-8_1_3"
              fill="white"
            >
              <path d="M606 870C606 873.866 609.134 877 613 877H624C627.866 877 631 873.866 631 870V859C631 855.134 627.866 852 624 852H613C609.134 852 606 855.134 606 859V870Z" />
            </mask>
            <path
              d="M604 870C604 874.971 608.029 879 613 879H624C628.971 879 633 874.971 633 870H629C629 872.761 626.761 875 624 875H613C610.239 875 608 872.761 608 870H604ZM631 852H606H631ZM613 852C608.029 852 604 856.029 604 861V870C604 874.971 608.029 879 613 879V875C610.239 875 608 872.761 608 870V859C608 855.134 610.239 852 613 852ZM624 879C628.971 879 633 874.971 633 870V861C633 856.029 628.971 852 624 852C626.761 852 629 855.134 629 859V870C629 872.761 626.761 875 624 875V879Z"
              fill="black"
              mask="url(#path-401-inside-8_1_3)"
            />
          </g>
          <path
            id="Rectangle 16"
            d="M1070 347C1070 343.686 1072.69 341 1076 341H1087C1090.31 341 1093 343.686 1093 347V358C1093 361.314 1090.31 364 1087 364H1076C1072.69 364 1070 361.314 1070 358V347Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 28"
            d="M1036 347C1036 343.686 1038.69 341 1042 341H1053C1056.31 341 1059 343.686 1059 347V358C1059 361.314 1056.31 364 1053 364H1042C1038.69 364 1036 361.314 1036 358V347Z"
            stroke="black"
            strokeWidth="2"
          />
          <g id="Rectangle 23">
            <mask
              id="path-405-inside-9_1_3"
              fill="white"
            >
              <path d="M474 281C474 277.134 477.134 274 481 274H492C495.866 274 499 277.134 499 281V292C499 295.866 495.866 299 492 299H481C477.134 299 474 295.866 474 292V281Z" />
            </mask>
            <path
              d="M472 281C472 276.029 476.029 272 481 272H492C496.971 272 501 276.029 501 281H497C497 278.239 494.761 276 492 276H481C478.239 276 476 278.239 476 281H472ZM499 299H474H499ZM481 299C476.029 299 472 294.971 472 290V281C472 276.029 476.029 272 481 272V276C478.239 276 476 278.239 476 281V292C476 295.866 478.239 299 481 299ZM492 272C496.971 272 501 276.029 501 281V290C501 294.971 496.971 299 492 299C494.761 299 497 295.866 497 292V281C497 278.239 494.761 276 492 276V272Z"
              fill="black"
              mask="url(#path-405-inside-9_1_3)"
            />
          </g>
          <path
            id="Rectangle 18"
            d="M1070 379C1070 375.686 1072.69 373 1076 373H1087C1090.31 373 1093 375.686 1093 379V390C1093 393.314 1090.31 396 1087 396H1076C1072.69 396 1070 393.314 1070 390V379Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 29"
            d="M1036 379C1036 375.686 1038.69 373 1042 373H1053C1056.31 373 1059 375.686 1059 379V390C1059 393.314 1056.31 396 1053 396H1042C1038.69 396 1036 393.314 1036 390V379Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 24"
            d="M475 313C475 309.686 477.686 307 481 307H492C495.314 307 498 309.686 498 313V324C498 327.314 495.314 330 492 330H481C477.686 330 475 327.314 475 324V313Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 11"
            d="M966 174C966 171.791 967.791 170 970 170H994C996.209 170 998 171.791 998 174V242C998 244.209 996.209 246 994 246H970C967.791 246 966 244.209 966 242V174Z"
            stroke="black"
            strokeWidth="2"
          />
          <g id="Rectangle 10">
            <mask
              id="path-411-inside-10_1_3"
              fill="white"
            >
              <path d="M1111 435H1154C1156.76 435 1159 437.239 1159 440V473C1159 475.761 1156.76 478 1154 478H1116C1113.24 478 1111 475.761 1111 473V435Z" />
            </mask>
            <path
              d="M1111 435H1159H1111ZM1161 473C1161 476.866 1157.87 480 1154 480H1115C1111.13 480 1108 476.866 1108 473H1114C1114 474.657 1114.9 476 1116 476H1154C1155.66 476 1157 474.657 1157 473H1161ZM1115 480C1111.13 480 1108 476.866 1108 473V435H1114V473C1114 474.657 1114.9 476 1116 476L1115 480ZM1154 435C1157.87 435 1161 438.134 1161 442V473C1161 476.866 1157.87 480 1154 480V476C1155.66 476 1157 474.657 1157 473V440C1157 437.239 1155.66 435 1154 435Z"
              fill="black"
              mask="url(#path-411-inside-10_1_3)"
            />
          </g>
          <g id="Rectangle 9">
            <mask
              id="path-413-inside-11_1_3"
              fill="white"
            >
              <path d="M746 726H771C773.761 726 776 728.239 776 731V844C776 846.761 773.761 849 771 849H751C748.239 849 746 846.761 746 844V726Z" />
            </mask>
            <path
              d="M746 724H771C774.866 724 778 727.134 778 731H774C774 729.343 772.657 728 771 728H746V724ZM778 844C778 847.866 774.866 851 771 851H753C749.134 851 746 847.866 746 844C746 845.657 748.239 847 751 847H771C772.657 847 774 845.657 774 844H778ZM746 849V726V849ZM771 724C774.866 724 778 727.134 778 731V844C778 847.866 774.866 851 771 851V847C772.657 847 774 845.657 774 844V731C774 729.343 772.657 728 771 728V724Z"
              fill="black"
              mask="url(#path-413-inside-11_1_3)"
            />
          </g>
          <path
            id="Rectangle 8"
            d="M495 468C495 463.029 499.029 459 504 459H522C526.971 459 531 463.029 531 468V484C531 488.971 526.971 493 522 493H504C499.029 493 495 488.971 495 484V468Z"
            stroke="black"
            strokeWidth="2"
          />
          <g id="Rectangle 7">
            <mask
              id="path-416-inside-12_1_3"
              fill="white"
            >
              <path d="M230 547C230 544.239 232.239 542 235 542H272C274.761 542 277 544.239 277 547V582H230V547Z" />
            </mask>
            <path
              d="M228 547C228 543.134 231.134 540 235 540H272C275.866 540 279 543.134 279 547H275C275 545.343 273.657 544 272 544H235C233.343 544 232 545.343 232 547H228ZM277 582H230H277ZM228 582V547C228 543.134 231.134 540 235 540V544C233.343 544 232 545.343 232 547V582H228ZM272 540C275.866 540 279 543.134 279 547V582H275V547C275 545.343 273.657 544 272 544V540Z"
              fill="black"
              mask="url(#path-416-inside-12_1_3)"
            />
          </g>
          <g id="Rectangle 25">
            <mask
              id="path-418-inside-13_1_3"
              fill="white"
            >
              <path d="M999 849C999 846.239 1001.24 844 1004 844H1029C1031.76 844 1034 846.239 1034 849V884H999V849Z" />
            </mask>
            <path
              d="M997 849C997 845.134 1000.13 842 1004 842H1029C1032.87 842 1036 845.134 1036 849H1032C1032 847.343 1030.66 846 1029 846H1004C1002.34 846 1001 847.343 1001 849H997ZM1034 884H999H1034ZM997 884V849C997 845.134 1000.13 842 1004 842V846C1002.34 846 1001 847.343 1001 849V884H997ZM1029 842C1032.87 842 1036 845.134 1036 849V884H1032V849C1032 847.343 1030.66 846 1029 846V842Z"
              fill="black"
              mask="url(#path-418-inside-13_1_3)"
            />
          </g>
          <g id="Rectangle 26">
            <mask
              id="path-420-inside-14_1_3"
              fill="white"
            >
              <path d="M901 773C901 770.239 903.239 768 906 768H931C933.761 768 936 770.239 936 773V827H901V773Z" />
            </mask>
            <path
              d="M899 773C899 769.134 902.134 766 906 766H931C934.866 766 938 769.134 938 773H934C934 771.343 932.657 770 931 770H906C904.343 770 903 771.343 903 773H899ZM936 827H901H936ZM899 827V773C899 769.134 902.134 766 906 766V770C904.343 770 903 771.343 903 773V827H899ZM931 766C934.866 766 938 769.134 938 773V827H934V773C934 771.343 932.657 770 931 770V766Z"
              fill="black"
              mask="url(#path-420-inside-14_1_3)"
            />
          </g>
          <path
            id="Rectangle 6"
            d="M101 645H130C132.209 645 134 646.791 134 649V675C134 677.209 132.209 679 130 679H105C102.791 679 101 677.209 101 675V645Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 33"
            d="M428 548H461C463.209 548 465 549.791 465 552V581C465 583.209 463.209 585 461 585H428V548Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 36"
            d="M765 71H798C800.209 71 802 72.7909 802 75V104C802 106.209 800.209 108 798 108H765V71Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 35"
            d="M607 110H574C571.791 110 570 111.791 570 114V143C570 145.209 571.791 147 574 147H607V110Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 34"
            d="M329 419H362C364.209 419 366 420.791 366 423V452C366 454.209 364.209 456 362 456H329V419Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 5"
            d="M51 792H90C92.2091 792 94 793.791 94 796V821C94 823.209 92.2091 825 90 825H55C52.7909 825 51 823.209 51 821V792Z"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            id="Rectangle 37"
            x="219"
            y="18"
            width="52"
            height="12"
            rx="4"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Rectangle 39"
            d="M33 433H59C65.0751 433 70 437.925 70 444H68C68 439.029 63.9706 435 59 435H33V433ZM70 468C70 474.075 65.0751 479 59 479H33V477H59C63.9706 477 68 472.971 68 468H70ZM33 478V434V478ZM59 433C65.0751 433 70 437.925 70 444V468C70 474.075 65.0751 479 59 479V477C63.9706 477 68 472.971 68 468V444C68 439.029 63.9706 435 59 435V433Z"
            fill="black"
          />
          <rect
            id="Rectangle 38_2"
            x="136"
            y="881"
            width="67"
            height="13"
            rx="5"
            stroke="black"
            strokeWidth="2"
          />
        </motion.g>
        <g id="SmallCircles">
          <circle
            id="Ellipse 10"
            cx="227.461"
            cy="825.517"
            r="10"
            transform="rotate(90 227.461 825.517)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 18"
            cx="1120"
            cy="563"
            r="6"
            transform="rotate(90 1120 563)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 170"
            cx="852"
            cy="538"
            r="6"
            transform="rotate(90 852 538)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 198"
            cx="357"
            cy="484"
            r="6"
            transform="rotate(90 357 484)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 114"
            cx="824"
            cy="628"
            r="6"
            transform="rotate(90 824 628)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 142"
            cx="1179"
            cy="691"
            r="6"
            transform="rotate(90 1179 691)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 86"
            cx="786"
            cy="873"
            r="6"
            transform="rotate(90 786 873)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 46"
            cx="330"
            cy="279"
            r="6"
            transform="rotate(90 330 279)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 317"
            cx="573"
            cy="57"
            r="6"
            transform="rotate(90 573 57)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 260"
            cx="613"
            cy="410"
            r="6"
            transform="rotate(90 613 410)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 279"
            cx="612"
            cy="215"
            r="6"
            transform="rotate(90 612 215)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 298"
            cx="802"
            cy="127"
            r="6"
            transform="rotate(90 802 127)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 226"
            cx="982"
            cy="109"
            r="6"
            transform="rotate(90 982 109)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 171"
            cx="1069"
            cy="577"
            r="6"
            transform="rotate(90 1069 577)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 199"
            cx="378"
            cy="485"
            r="6"
            transform="rotate(90 378 485)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 115"
            cx="315"
            cy="767"
            r="6"
            transform="rotate(90 315 767)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 143"
            cx="853"
            cy="700"
            r="6"
            transform="rotate(90 853 700)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 87"
            cx="1061"
            cy="848"
            r="6"
            transform="rotate(90 1061 848)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 56"
            cx="347"
            cy="299"
            r="6"
            transform="rotate(90 347 299)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 318"
            cx="591"
            cy="33"
            r="6"
            transform="rotate(90 591 33)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 261"
            cx="631"
            cy="395"
            r="6"
            transform="rotate(90 631 395)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 280"
            cx="393"
            cy="280"
            r="6"
            transform="rotate(90 393 280)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 319"
            cx="769"
            cy="188"
            r="6"
            transform="rotate(90 769 188)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 299"
            cx="775"
            cy="301"
            r="6"
            transform="rotate(90 775 301)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 227"
            cx="996"
            cy="127"
            r="6"
            transform="rotate(90 996 127)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 172"
            cx="920"
            cy="436"
            r="6"
            transform="rotate(90 920 436)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 228"
            cx="1140"
            cy="407"
            r="6"
            transform="rotate(90 1140 407)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 200"
            cx="466"
            cy="514"
            r="6"
            transform="rotate(90 466 514)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 116"
            cx="242"
            cy="715"
            r="6"
            transform="rotate(90 242 715)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 144"
            cx="559"
            cy="750"
            r="6"
            transform="rotate(90 559 750)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 88"
            cx="1038"
            cy="768"
            r="6"
            transform="rotate(90 1038 768)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 66"
            cx="280"
            cy="454"
            r="6"
            transform="rotate(90 280 454)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 76"
            cx="151"
            cy="536"
            r="6"
            transform="rotate(90 151 536)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 348"
            cx="269"
            cy="192"
            r="6"
            transform="rotate(90 269 192)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 366"
            cx="225"
            cy="255"
            r="6"
            transform="rotate(90 225 255)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 320"
            cx="379"
            cy="117"
            r="6"
            transform="rotate(90 379 117)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 262"
            cx="868"
            cy="426"
            r="6"
            transform="rotate(90 868 426)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 281"
            cx="266"
            cy="128"
            r="6"
            transform="rotate(90 266 128)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 349"
            cx="324"
            cy="146"
            r="6"
            transform="rotate(90 324 146)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 367"
            cx="175"
            cy="377"
            r="6"
            transform="rotate(90 175 377)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 300"
            cx="919"
            cy="280"
            r="6"
            transform="rotate(90 919 280)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 229"
            cx="994"
            cy="265"
            r="6"
            transform="rotate(90 994 265)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 173"
            cx="930"
            cy="595"
            r="6"
            transform="rotate(90 930 595)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 201"
            cx="431"
            cy="526"
            r="6"
            transform="rotate(90 431 526)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 117"
            cx="890"
            cy="632"
            r="6"
            transform="rotate(90 890 632)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 145"
            cx="1033"
            cy="738"
            r="6"
            transform="rotate(90 1033 738)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 89"
            cx="917"
            cy="864"
            r="6"
            transform="rotate(90 917 864)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 350"
            cx="325"
            cy="47"
            r="6"
            transform="rotate(90 325 47)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 368"
            cx="200"
            cy="301"
            r="6"
            transform="rotate(90 200 301)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 321"
            cx="451"
            cy="95"
            r="6"
            transform="rotate(90 451 95)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 263"
            cx="801"
            cy="400"
            r="6"
            transform="rotate(90 801 400)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 351"
            cx="307"
            cy="160"
            r="6"
            transform="rotate(90 307 160)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 369"
            cx="156"
            cy="374"
            r="6"
            transform="rotate(90 156 374)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 322"
            cx="626"
            cy="172"
            r="6"
            transform="rotate(90 626 172)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 301"
            cx="537"
            cy="317"
            r="6"
            transform="rotate(90 537 317)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 230"
            cx="1055"
            cy="46"
            r="6"
            transform="rotate(90 1055 46)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 174"
            cx="1025"
            cy="577"
            r="6"
            transform="rotate(90 1025 577)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 202"
            cx="600"
            cy="576"
            r="6"
            transform="rotate(90 600 576)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 118"
            cx="266"
            cy="764"
            r="6"
            transform="rotate(90 266 764)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 146"
            cx="796"
            cy="698"
            r="6"
            transform="rotate(90 796 698)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 90"
            cx="1157"
            cy="860"
            r="6"
            transform="rotate(90 1157 860)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 352"
            cx="307"
            cy="29"
            r="6"
            transform="rotate(90 307 29)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 370"
            cx="162"
            cy="253"
            r="6"
            transform="rotate(90 162 253)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 323"
            cx="599"
            cy="199"
            r="6"
            transform="rotate(90 599 199)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 264"
            cx="897"
            cy="410"
            r="6"
            transform="rotate(90 897 410)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 353"
            cx="286"
            cy="174"
            r="6"
            transform="rotate(90 286 174)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 371"
            cx="134"
            cy="380"
            r="6"
            transform="rotate(90 134 380)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 324"
            cx="657"
            cy="171"
            r="6"
            transform="rotate(90 657 171)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 302"
            cx="541"
            cy="286"
            r="6"
            transform="rotate(90 541 286)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 231"
            cx="1077"
            cy="32"
            r="6"
            transform="rotate(90 1077 32)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 175"
            cx="846"
            cy="444"
            r="6"
            transform="rotate(90 846 444)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 232"
            cx="1054"
            cy="286"
            r="6"
            transform="rotate(90 1054 286)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 203"
            cx="318"
            cy="400"
            r="6"
            transform="rotate(90 318 400)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 119"
            cx="209"
            cy="662"
            r="6"
            transform="rotate(90 209 662)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 147"
            cx="562"
            cy="679"
            r="6"
            transform="rotate(90 562 679)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 91"
            cx="1053"
            cy="791"
            r="6"
            transform="rotate(90 1053 791)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 67"
            cx="213"
            cy="462"
            r="6"
            transform="rotate(90 213 462)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 77"
            cx="137"
            cy="517"
            r="6"
            transform="rotate(90 137 517)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 354"
            cx="307"
            cy="89"
            r="6"
            transform="rotate(90 307 89)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 372"
            cx="52"
            cy="380"
            r="6"
            transform="rotate(90 52 380)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 325"
            cx="405"
            cy="236"
            r="6"
            transform="rotate(90 405 236)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 265"
            cx="874"
            cy="278"
            r="6"
            transform="rotate(90 874 278)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 284"
            cx="45"
            cy="165"
            r="6"
            transform="rotate(90 45 165)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 355"
            cx="267"
            cy="107"
            r="6"
            transform="rotate(90 267 107)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 373"
            cx="95"
            cy="401"
            r="6"
            transform="rotate(90 95 401)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 303"
            cx="950"
            cy="310"
            r="6"
            transform="rotate(90 950 310)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 233"
            cx="916"
            cy="110"
            r="6"
            transform="rotate(90 916 110)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 176"
            cx="1099"
            cy="495"
            r="6"
            transform="rotate(90 1099 495)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 204"
            cx="399"
            cy="408"
            r="6"
            transform="rotate(90 399 408)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 120"
            cx="467"
            cy="724"
            r="6"
            transform="rotate(90 467 724)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 148"
            cx="803"
            cy="766"
            r="6"
            transform="rotate(90 803 766)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 92"
            cx="965"
            cy="862"
            r="6"
            transform="rotate(90 965 862)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 356"
            cx="209"
            cy="48"
            r="6"
            transform="rotate(90 209 48)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 374"
            cx="85"
            cy="222"
            r="6"
            transform="rotate(90 85 222)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 326"
            cx="422"
            cy="275"
            r="6"
            transform="rotate(90 422 275)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 266"
            cx="1037"
            cy="30"
            r="6"
            transform="rotate(90 1037 30)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 327"
            cx="651"
            cy="215"
            r="6"
            transform="rotate(90 651 215)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 357"
            cx="212"
            cy="128"
            r="6"
            transform="rotate(90 212 128)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 375"
            cx="35"
            cy="336"
            r="6"
            transform="rotate(90 35 336)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 328"
            cx="406"
            cy="195"
            r="6"
            transform="rotate(90 406 195)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 304"
            cx="852"
            cy="158"
            r="6"
            transform="rotate(90 852 158)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 234"
            cx="900"
            cy="95"
            r="6"
            transform="rotate(90 900 95)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 177"
            cx="1038"
            cy="460"
            r="6"
            transform="rotate(90 1038 460)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 205"
            cx="384"
            cy="423"
            r="6"
            transform="rotate(90 384 423)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 121"
            cx="467"
            cy="701"
            r="6"
            transform="rotate(90 467 701)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 149"
            cx="817"
            cy="746"
            r="6"
            transform="rotate(90 817 746)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 93"
            cx="912"
            cy="746"
            r="6"
            transform="rotate(90 912 746)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 358"
            cx="193"
            cy="67"
            r="6"
            transform="rotate(90 193 67)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 376"
            cx="123"
            cy="213"
            r="6"
            transform="rotate(90 123 213)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 329"
            cx="423"
            cy="297"
            r="6"
            transform="rotate(90 423 297)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 267"
            cx="622"
            cy="129"
            r="6"
            transform="rotate(90 622 129)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 330"
            cx="673"
            cy="215"
            r="6"
            transform="rotate(90 673 215)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 359"
            cx="329"
            cy="91"
            r="6"
            transform="rotate(90 329 91)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 377"
            cx="35"
            cy="355"
            r="6"
            transform="rotate(90 35 355)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 331"
            cx="405"
            cy="218"
            r="6"
            transform="rotate(90 405 218)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 305"
            cx="874"
            cy="158"
            r="6"
            transform="rotate(90 874 158)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 235"
            cx="864"
            cy="83"
            r="6"
            transform="rotate(90 864 83)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 178"
            cx="1071"
            cy="460"
            r="6"
            transform="rotate(90 1071 460)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 206"
            cx="665"
            cy="543"
            r="6"
            transform="rotate(90 665 543)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 122"
            cx="467"
            cy="679"
            r="6"
            transform="rotate(90 467 679)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 150"
            cx="467"
            cy="746"
            r="6"
            transform="rotate(90 467 746)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 94"
            cx="1013"
            cy="778"
            r="6"
            transform="rotate(90 1013 778)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 68"
            cx="213"
            cy="487"
            r="6"
            transform="rotate(90 213 487)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 78"
            cx="117"
            cy="450"
            r="6"
            transform="rotate(90 117 450)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 30"
            cx="1168"
            cy="563"
            r="6"
            transform="rotate(90 1168 563)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 179"
            cx="914"
            cy="544"
            r="6"
            transform="rotate(90 914 544)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 207"
            cx="358"
            cy="666"
            r="6"
            transform="rotate(90 358 666)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 123"
            cx="655"
            cy="623"
            r="6"
            transform="rotate(90 655 623)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 151"
            cx="1158"
            cy="635"
            r="6"
            transform="rotate(90 1158 635)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 95"
            cx="467"
            cy="872"
            r="6"
            transform="rotate(90 467 872)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 49"
            cx="455"
            cy="218"
            r="6"
            transform="rotate(90 455 218)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 332"
            cx="876"
            cy="195"
            r="6"
            transform="rotate(90 876 195)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 268"
            cx="754"
            cy="503"
            r="6"
            transform="rotate(90 754 503)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 287"
            cx="857"
            cy="225"
            r="6"
            transform="rotate(90 857 225)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 306"
            cx="952"
            cy="329"
            r="6"
            transform="rotate(90 952 329)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 236"
            cx="1168"
            cy="417"
            r="6"
            transform="rotate(90 1168 417)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 180"
            cx="1067"
            cy="525"
            r="6"
            transform="rotate(90 1067 525)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 208"
            cx="521"
            cy="572"
            r="6"
            transform="rotate(90 521 572)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 124"
            cx="364"
            cy="785"
            r="6"
            transform="rotate(90 364 785)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 152"
            cx="635"
            cy="837"
            r="6"
            transform="rotate(90 635 837)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 96"
            cx="992"
            cy="809"
            r="6"
            transform="rotate(90 992 809)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 59"
            cx="471"
            cy="177"
            r="6"
            transform="rotate(90 471 177)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 333"
            cx="889"
            cy="178"
            r="6"
            transform="rotate(90 889 178)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 269"
            cx="731"
            cy="505"
            r="6"
            transform="rotate(90 731 505)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 288"
            cx="894"
            cy="278"
            r="6"
            transform="rotate(90 894 278)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 307"
            cx="950"
            cy="353"
            r="6"
            transform="rotate(90 950 353)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 237"
            cx="1142"
            cy="382"
            r="6"
            transform="rotate(90 1142 382)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 181"
            cx="913"
            cy="478"
            r="6"
            transform="rotate(90 913 478)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 238"
            cx="1184"
            cy="404"
            r="6"
            transform="rotate(90 1184 404)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 209"
            cx="568"
            cy="606"
            r="6"
            transform="rotate(90 568 606)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 125"
            cx="257"
            cy="738"
            r="6"
            transform="rotate(90 257 738)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 153"
            cx="576"
            cy="772"
            r="6"
            transform="rotate(90 576 772)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 97"
            cx="1071"
            cy="774"
            r="6"
            transform="rotate(90 1071 774)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 69"
            cx="221"
            cy="395"
            r="6"
            transform="rotate(90 221 395)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 79"
            cx="31"
            cy="562"
            r="6"
            transform="rotate(90 31 562)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 34"
            cx="209"
            cy="517"
            r="6"
            transform="rotate(90 209 517)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 50"
            cx="826"
            cy="445"
            r="6"
            transform="rotate(90 826 445)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 239"
            cx="1175"
            cy="220"
            r="6"
            transform="rotate(90 1175 220)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 182"
            cx="919"
            cy="510"
            r="6"
            transform="rotate(90 919 510)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 210"
            cx="278"
            cy="607"
            r="6"
            transform="rotate(90 278 607)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 126"
            cx="579"
            cy="658"
            r="6"
            transform="rotate(90 579 658)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 154"
            cx="1008"
            cy="662"
            r="6"
            transform="rotate(90 1008 662)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 98"
            cx="1015"
            cy="822"
            r="6"
            transform="rotate(90 1015 822)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 60"
            cx="802"
            cy="445"
            r="6"
            transform="rotate(90 802 445)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 240"
            cx="1118"
            cy="192"
            r="6"
            transform="rotate(90 1118 192)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 183"
            cx="1080"
            cy="544"
            r="6"
            transform="rotate(90 1080 544)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 211"
            cx="492"
            cy="602"
            r="6"
            transform="rotate(90 492 602)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 127"
            cx="510"
            cy="699"
            r="6"
            transform="rotate(90 510 699)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 155"
            cx="619"
            cy="756"
            r="6"
            transform="rotate(90 619 756)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 99"
            cx="1124"
            cy="774"
            r="6"
            transform="rotate(90 1124 774)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 70"
            cx="206"
            cy="410"
            r="6"
            transform="rotate(90 206 410)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 80"
            cx="76"
            cy="562"
            r="6"
            transform="rotate(90 76 562)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 38"
            cx="583"
            cy="525"
            r="6"
            transform="rotate(90 583 525)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 42"
            cx="67"
            cy="862"
            r="6"
            transform="rotate(90 67 862)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 20"
            cx="85"
            cy="616"
            r="6"
            transform="rotate(90 85 616)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 23"
            cx="52"
            cy="650"
            r="6"
            transform="rotate(90 52 650)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 27"
            cx="124"
            cy="591"
            r="6"
            transform="rotate(90 124 591)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 31"
            cx="31"
            cy="771"
            r="6"
            transform="rotate(90 31 771)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 35"
            cx="132"
            cy="729"
            r="6"
            transform="rotate(90 132 729)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 39"
            cx="566"
            cy="506"
            r="6"
            transform="rotate(90 566 506)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 43"
            cx="74"
            cy="770"
            r="6"
            transform="rotate(90 74 770)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 19"
            cx="1142"
            cy="563"
            r="6"
            transform="rotate(90 1142 563)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 184"
            cx="461"
            cy="631"
            r="6"
            transform="rotate(90 461 631)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 212"
            cx="546"
            cy="609"
            r="6"
            transform="rotate(90 546 609)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 128"
            cx="579"
            cy="695"
            r="6"
            transform="rotate(90 579 695)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 156"
            cx="1142"
            cy="651"
            r="6"
            transform="rotate(90 1142 651)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 100"
            cx="307"
            cy="859"
            r="6"
            transform="rotate(90 307 859)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 51"
            cx="416"
            cy="326"
            r="6"
            transform="rotate(90 416 326)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 334"
            cx="832"
            cy="170"
            r="6"
            transform="rotate(90 832 170)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 270"
            cx="710"
            cy="502"
            r="6"
            transform="rotate(90 710 502)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 289"
            cx="873"
            cy="244"
            r="6"
            transform="rotate(90 873 244)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 308"
            cx="950"
            cy="375"
            r="6"
            transform="rotate(90 950 375)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 241"
            cx="1126"
            cy="334"
            r="6"
            transform="rotate(90 1126 334)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 185"
            cx="1093"
            cy="577"
            r="6"
            transform="rotate(90 1093 577)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 213"
            cx="340"
            cy="501"
            r="6"
            transform="rotate(90 340 501)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 129"
            cx="342"
            cy="766"
            r="6"
            transform="rotate(90 342 766)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 157"
            cx="615"
            cy="826"
            r="6"
            transform="rotate(90 615 826)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 101"
            cx="1041"
            cy="809"
            r="6"
            transform="rotate(90 1041 809)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 61"
            cx="369"
            cy="293"
            r="6"
            transform="rotate(90 369 293)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 335"
            cx="892"
            cy="209"
            r="6"
            transform="rotate(90 892 209)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 271"
            cx="659"
            cy="428"
            r="6"
            transform="rotate(90 659 428)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 290"
            cx="400"
            cy="260"
            r="6"
            transform="rotate(90 400 260)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 336"
            cx="749"
            cy="165"
            r="6"
            transform="rotate(90 749 165)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 309"
            cx="857"
            cy="258"
            r="6"
            transform="rotate(90 857 258)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 242"
            cx="1126"
            cy="357"
            r="6"
            transform="rotate(90 1126 357)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 186"
            cx="910"
            cy="457"
            r="6"
            transform="rotate(90 910 457)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 243"
            cx="1181"
            cy="318"
            r="6"
            transform="rotate(90 1181 318)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 214"
            cx="322"
            cy="483"
            r="6"
            transform="rotate(90 322 483)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 130"
            cx="284"
            cy="747"
            r="6"
            transform="rotate(90 284 747)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 158"
            cx="582"
            cy="749"
            r="6"
            transform="rotate(90 582 749)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 102"
            cx="1011"
            cy="756"
            r="6"
            transform="rotate(90 1011 756)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 71"
            cx="246"
            cy="452"
            r="6"
            transform="rotate(90 246 452)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 81"
            cx="139"
            cy="569"
            r="6"
            transform="rotate(90 139 569)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 24"
            cx="782"
            cy="445"
            r="6"
            transform="rotate(90 782 445)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 244"
            cx="1074"
            cy="286"
            r="6"
            transform="rotate(90 1074 286)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 187"
            cx="929"
            cy="559"
            r="6"
            transform="rotate(90 929 559)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 215"
            cx="423"
            cy="487"
            r="6"
            transform="rotate(90 423 487)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 131"
            cx="853"
            cy="628"
            r="6"
            transform="rotate(90 853 628)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 159"
            cx="1054"
            cy="736"
            r="6"
            transform="rotate(90 1054 736)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 103"
            cx="896"
            cy="865"
            r="6"
            transform="rotate(90 896 865)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 52"
            cx="362"
            cy="158"
            r="6"
            transform="rotate(90 362 158)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 337"
            cx="613"
            cy="89"
            r="6"
            transform="rotate(90 613 89)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 272"
            cx="834"
            cy="414"
            r="6"
            transform="rotate(90 834 414)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 291"
            cx="311"
            cy="308"
            r="6"
            transform="rotate(90 311 308)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 338"
            cx="624"
            cy="149"
            r="6"
            transform="rotate(90 624 149)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 310"
            cx="684"
            cy="327"
            r="6"
            transform="rotate(90 684 327)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 245"
            cx="957"
            cy="127"
            r="6"
            transform="rotate(90 957 127)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 188"
            cx="1048"
            cy="577"
            r="6"
            transform="rotate(90 1048 577)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 216"
            cx="488"
            cy="554"
            r="6"
            transform="rotate(90 488 554)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 132"
            cx="295"
            cy="764"
            r="6"
            transform="rotate(90 295 764)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 160"
            cx="603"
            cy="773"
            r="6"
            transform="rotate(90 603 773)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 104"
            cx="1060"
            cy="870"
            r="6"
            transform="rotate(90 1060 870)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 62"
            cx="346"
            cy="144"
            r="6"
            transform="rotate(90 346 144)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 339"
            cx="626"
            cy="106"
            r="6"
            transform="rotate(90 626 106)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 273"
            cx="770"
            cy="418"
            r="6"
            transform="rotate(90 770 418)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 292"
            cx="360"
            cy="322"
            r="6"
            transform="rotate(90 360 322)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 340"
            cx="670"
            cy="106"
            r="6"
            transform="rotate(90 670 106)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 311"
            cx="541"
            cy="348"
            r="6"
            transform="rotate(90 541 348)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 246"
            cx="957"
            cy="154"
            r="6"
            transform="rotate(90 957 154)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 189"
            cx="898"
            cy="440"
            r="6"
            transform="rotate(90 898 440)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 217"
            cx="520"
            cy="539"
            r="6"
            transform="rotate(90 520 539)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 133"
            cx="226"
            cy="676"
            r="6"
            transform="rotate(90 226 676)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 161"
            cx="469"
            cy="769"
            r="6"
            transform="rotate(90 469 769)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 105"
            cx="1088"
            cy="791"
            r="6"
            transform="rotate(90 1088 791)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 72"
            cx="264"
            cy="471"
            r="6"
            transform="rotate(90 264 471)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 82"
            cx="121"
            cy="531"
            r="6"
            transform="rotate(90 121 531)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 360"
            cx="216"
            cy="69"
            r="6"
            transform="rotate(90 216 69)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 378"
            cx="88"
            cy="294"
            r="6"
            transform="rotate(90 88 294)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 341"
            cx="388"
            cy="156"
            r="6"
            transform="rotate(90 388 156)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 274"
            cx="893"
            cy="392"
            r="6"
            transform="rotate(90 893 392)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 293"
            cx="64"
            cy="181"
            r="6"
            transform="rotate(90 64 181)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 361"
            cx="294"
            cy="106"
            r="6"
            transform="rotate(90 294 106)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 379"
            cx="106"
            cy="372"
            r="6"
            transform="rotate(90 106 372)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 312"
            cx="938"
            cy="289"
            r="6"
            transform="rotate(90 938 289)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 247"
            cx="924"
            cy="50"
            r="6"
            transform="rotate(90 924 50)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 190"
            cx="1193"
            cy="562"
            r="6"
            transform="rotate(90 1193 562)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 218"
            cx="444"
            cy="388"
            r="6"
            transform="rotate(90 444 388)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 134"
            cx="845"
            cy="608"
            r="6"
            transform="rotate(90 845 608)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 162"
            cx="821"
            cy="808"
            r="6"
            transform="rotate(90 821 808)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 106"
            cx="943"
            cy="865"
            r="6"
            transform="rotate(90 943 865)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 362"
            cx="246"
            cy="47"
            r="6"
            transform="rotate(90 246 47)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 380"
            cx="88"
            cy="270"
            r="6"
            transform="rotate(90 88 270)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 342"
            cx="438"
            cy="146"
            r="6"
            transform="rotate(90 438 146)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 275"
            cx="1182"
            cy="296"
            r="6"
            transform="rotate(90 1182 296)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 294"
            cx="96"
            cy="151"
            r="6"
            transform="rotate(90 96 151)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 363"
            cx="230"
            cy="84"
            r="6"
            transform="rotate(90 230 84)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 381"
            cx="79"
            cy="418"
            r="6"
            transform="rotate(90 79 418)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 343"
            cx="422"
            cy="243"
            r="6"
            transform="rotate(90 422 243)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 313"
            cx="514"
            cy="301"
            r="6"
            transform="rotate(90 514 301)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 248"
            cx="901"
            cy="50"
            r="6"
            transform="rotate(90 901 50)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 191"
            cx="1053"
            cy="445"
            r="6"
            transform="rotate(90 1053 445)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 219"
            cx="386"
            cy="456"
            r="6"
            transform="rotate(90 386 456)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 135"
            cx="235"
            cy="793"
            r="6"
            transform="rotate(90 235 793)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 163"
            cx="795"
            cy="721"
            r="6"
            transform="rotate(90 795 721)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 107"
            cx="1193"
            cy="856"
            r="6"
            transform="rotate(90 1193 856)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 364"
            cx="293"
            cy="47"
            r="6"
            transform="rotate(90 293 47)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 382"
            cx="140"
            cy="232"
            r="6"
            transform="rotate(90 140 232)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 344"
            cx="420"
            cy="129"
            r="6"
            transform="rotate(90 420 129)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 276"
            cx="836"
            cy="260"
            r="6"
            transform="rotate(90 836 260)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 365"
            cx="276"
            cy="63"
            r="6"
            transform="rotate(90 276 63)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 383"
            cx="87"
            cy="315"
            r="6"
            transform="rotate(90 87 315)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 384"
            cx="51"
            cy="405"
            r="6"
            transform="rotate(90 51 405)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 345"
            cx="409"
            cy="172"
            r="6"
            transform="rotate(90 409 172)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 314"
            cx="816"
            cy="143"
            r="6"
            transform="rotate(90 816 143)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 249"
            cx="842"
            cy="83"
            r="6"
            transform="rotate(90 842 83)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 192"
            cx="1086"
            cy="442"
            r="6"
            transform="rotate(90 1086 442)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 220"
            cx="682"
            cy="526"
            r="6"
            transform="rotate(90 682 526)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 136"
            cx="187"
            cy="706"
            r="6"
            transform="rotate(90 187 706)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 164"
            cx="548"
            cy="642"
            r="6"
            transform="rotate(90 548 642)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 108"
            cx="989"
            cy="778"
            r="6"
            transform="rotate(90 989 778)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 73"
            cx="188"
            cy="487"
            r="6"
            transform="rotate(90 188 487)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 83"
            cx="116"
            cy="499"
            r="6"
            transform="rotate(90 116 499)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 32"
            cx="933"
            cy="468"
            r="6"
            transform="rotate(90 933 468)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 250"
            cx="1108"
            cy="158"
            r="6"
            transform="rotate(90 1108 158)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 193"
            cx="896"
            cy="524"
            r="6"
            transform="rotate(90 896 524)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 221"
            cx="188"
            cy="726"
            r="6"
            transform="rotate(90 188 726)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 137"
            cx="569"
            cy="641"
            r="6"
            transform="rotate(90 569 641)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 165"
            cx="1174"
            cy="618"
            r="6"
            transform="rotate(90 1174 618)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 109"
            cx="430"
            cy="872"
            r="6"
            transform="rotate(90 430 872)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 54"
            cx="440"
            cy="111"
            r="6"
            transform="rotate(90 440 111)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 346"
            cx="717"
            cy="215"
            r="6"
            transform="rotate(90 717 215)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 277"
            cx="786"
            cy="464"
            r="6"
            transform="rotate(90 786 464)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 296"
            cx="835"
            cy="225"
            r="6"
            transform="rotate(90 835 225)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 315"
            cx="682"
            cy="418"
            r="6"
            transform="rotate(90 682 418)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 251"
            cx="1181"
            cy="274"
            r="6"
            transform="rotate(90 1181 274)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 194"
            cx="1080"
            cy="510"
            r="6"
            transform="rotate(90 1080 510)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 222"
            cx="338"
            cy="651"
            r="6"
            transform="rotate(90 338 651)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 138"
            cx="532"
            cy="679"
            r="6"
            transform="rotate(90 532 679)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 166"
            cx="705"
            cy="756"
            r="6"
            transform="rotate(90 705 756)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 110"
            cx="965"
            cy="808"
            r="6"
            transform="rotate(90 965 808)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 64"
            cx="992"
            cy="30"
            r="6"
            transform="rotate(90 992 30)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 347"
            cx="695"
            cy="206"
            r="6"
            transform="rotate(90 695 206)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 278"
            cx="769"
            cy="488"
            r="6"
            transform="rotate(90 769 488)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 297"
            cx="936"
            cy="391"
            r="6"
            transform="rotate(90 936 391)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 316"
            cx="916"
            cy="404"
            r="6"
            transform="rotate(90 916 404)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 252"
            cx="1118"
            cy="220"
            r="6"
            transform="rotate(90 1118 220)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 195"
            cx="900"
            cy="492"
            r="6"
            transform="rotate(90 900 492)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 253"
            cx="1185"
            cy="149"
            r="6"
            transform="rotate(90 1185 149)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 223"
            cx="518"
            cy="595"
            r="6"
            transform="rotate(90 518 595)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 139"
            cx="252"
            cy="780"
            r="6"
            transform="rotate(90 252 780)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 167"
            cx="635"
            cy="739"
            r="6"
            transform="rotate(90 635 739)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 111"
            cx="1092"
            cy="761"
            r="6"
            transform="rotate(90 1092 761)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 74"
            cx="214"
            cy="434"
            r="6"
            transform="rotate(90 214 434)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 84"
            cx="52"
            cy="562"
            r="6"
            transform="rotate(90 52 562)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 36"
            cx="264"
            cy="494"
            r="6"
            transform="rotate(90 264 494)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 55"
            cx="859"
            cy="118"
            r="6"
            transform="rotate(90 859 118)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 254"
            cx="1135"
            cy="165"
            r="6"
            transform="rotate(90 1135 165)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 196"
            cx="637"
            cy="477"
            r="6"
            transform="rotate(90 637 477)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 224"
            cx="257"
            cy="607"
            r="6"
            transform="rotate(90 257 607)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 140"
            cx="631"
            cy="658"
            r="6"
            transform="rotate(90 631 658)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 168"
            cx="654"
            cy="791"
            r="6"
            transform="rotate(90 654 791)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 112"
            cx="952"
            cy="840"
            r="6"
            transform="rotate(90 952 840)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 65"
            cx="882"
            cy="118"
            r="6"
            transform="rotate(90 882 118)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 255"
            cx="1152"
            cy="181"
            r="6"
            transform="rotate(90 1152 181)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 197"
            cx="652"
            cy="493"
            r="6"
            transform="rotate(90 652 493)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 225"
            cx="465"
            cy="602"
            r="6"
            transform="rotate(90 465 602)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 141"
            cx="589"
            cy="622"
            r="6"
            transform="rotate(90 589 622)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 169"
            cx="989"
            cy="680"
            r="6"
            transform="rotate(90 989 680)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 113"
            cx="1165"
            cy="773"
            r="6"
            transform="rotate(90 1165 773)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 75"
            cx="134"
            cy="434"
            r="6"
            transform="rotate(90 134 434)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 85"
            cx="102"
            cy="562"
            r="6"
            transform="rotate(90 102 562)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 40"
            cx="577"
            cy="557"
            r="6"
            transform="rotate(90 577 557)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 44"
            cx="101"
            cy="855"
            r="6"
            transform="rotate(90 101 855)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 21"
            cx="86"
            cy="691"
            r="6"
            transform="rotate(90 86 691)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 25"
            cx="67"
            cy="632"
            r="6"
            transform="rotate(90 67 632)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 29"
            cx="103"
            cy="623"
            r="6"
            transform="rotate(90 103 623)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 33"
            cx="133"
            cy="705"
            r="6"
            transform="rotate(90 133 705)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 37"
            cx="123"
            cy="744"
            r="6"
            transform="rotate(90 123 744)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 41"
            cx="598"
            cy="541"
            r="6"
            transform="rotate(90 598 541)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 45"
            cx="111"
            cy="776"
            r="6"
            transform="rotate(90 111 776)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 11"
            cx="226.517"
            cy="852.5"
            r="10"
            transform="rotate(90 226.517 852.5)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 12"
            cx="225.539"
            cy="880.483"
            r="10"
            transform="rotate(90 225.539 880.483)"
            stroke="black"
            strokeWidth="2"
          />
        </g>
        <g id="BigCircles">
          <circle
            id="Ellipse 1"
            cx="502"
            cy="639"
            r="24"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 264_2"
            cx="600"
            cy="376"
            r="19"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 5"
            cx="337"
            cy="810"
            r="24"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 3"
            cx="175"
            cy="445"
            r="24"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 2"
            cx="502"
            cy="639"
            r="14"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 265_2"
            cx="600"
            cy="376"
            r="10"
            fill="black"
          />
          <circle
            id="Ellipse 6"
            cx="1037"
            cy="665"
            r="10"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 256"
            cx="775"
            cy="30"
            r="10"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 14"
            cx="1117.12"
            cy="54.0002"
            r="10"
            transform="rotate(90 1117.12 54.0002)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 13"
            cx="242"
            cy="154"
            r="10"
            transform="rotate(90 242 154)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 260_2"
            cx="76"
            cy="243"
            r="10"
            transform="rotate(90 76 243)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 261_2"
            cx="78"
            cy="336"
            r="9"
            transform="rotate(90 78 336)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 262_2"
            cx="108"
            cy="184"
            r="10"
            transform="rotate(90 108 184)"
            fill="black"
          />
          <circle
            id="Ellipse 263_2"
            cx="65"
            cy="211"
            r="8"
            transform="rotate(90 65 211)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 7"
            cx="1064"
            cy="665"
            r="10"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 257"
            cx="802"
            cy="30"
            r="10"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 15"
            cx="1117.04"
            cy="81.0001"
            r="10"
            transform="rotate(90 1117.04 81.0001)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 8"
            cx="1092"
            cy="665"
            r="10"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 258"
            cx="830"
            cy="30"
            r="10"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 16"
            cx="1116.96"
            cy="109"
            r="10"
            transform="rotate(90 1116.96 109)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 9"
            cx="1119"
            cy="665"
            r="10"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 259"
            cx="857"
            cy="30"
            r="10"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 17"
            cx="1116.88"
            cy="136"
            r="10"
            transform="rotate(90 1116.88 136)"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 4"
            cx="175"
            cy="445"
            r="14"
            stroke="black"
            strokeWidth="2"
          />
        </g>

        <motion.path
          id="CircuitLineTopLeft"
          d="M46 27V158M237.5 334H222.5L214.5 327V282.5L209.5 275V226.5L100.5 118V27M237.5 327H225V261.5M242.5 323V244.5L112 113.5V27M252.5 323V238L123 108V27M264 323V230.5L135 102.5V27M275 323V224.5L146 99V27M286 323V198.5L307 178V166M296.5 323V205L324 178V152.5M345.5 150V172.5L307 208V263.5L311.5 270.5V301.5M329.5 272.5L319 261.5V215L362 174.5V164M345.5 292.5V268.5L329.5 252.5V219L378 172.5H403.5M368.5 286.5V254.5M388 276.5L378 254.5M395.5 256L384 246.5M398.5 236H384M398.5 219L384 226.5M378 221.5V210M368.5 221.5V208L384 193H400M356.5 221.5V205M351 248.5H341.5M351 238H339M351 226.5H339M417.5 279.5L368.5 334H301M417.5 299.5L375.5 345H301M410.5 327L381 354H301M535.5 348.5H405.5L386 366.5H301M324.5 399.5H339L351 388.5H437M237.5 346.5H217L198 327V307M242.5 384V404.5L219 429.5M264 384V421.5L246 438.5V445.5M275 384V429.5L264 438.5V464.5M286 384V429.5L296.5 441V664.5L334 701.5H368M368 691H340L308.5 660V435L296.5 421.5V384M252.5 384V415L231.5 438.5V462L248 478.5V543.5M237.5 356H211.5L182 327V290.5L198 275V232.5L89 123.5V27M78 27V134.5L91.5 147.5M67.5 27V147.5L89 168.5H116L185.5 238V270.5L169.5 286.5V331.5L206.5 366.5H237.5M237.5 378.5H201.5L159.5 336V279.5L176 263.5V244.5L131 200H104.5L56.5 152.5V27M301 325.5H324.5L354 321.5"
          stroke="url(#paint0_radial_1_3)"
          strokeWidth="2"
          variants={pathWriter}
          initial="hidden"
          animate="visible"
          custom={0}
        />
        <motion.path
          id="CircuitLineTop"
          d="M155 27.5V91L177 113H247.5L261 107.5M165.5 27.5V86.5L182 102H242L250.5 91H301M177 27.5V85H224M193 61V27.5M203 27.5V35L209.5 42M222 69.5H245L253.5 80H285.5L294.5 73H351.5L371 56H455.5L476.5 78.5V113L471 118.5V171M282 64H344.5L363.5 45H459.5L488 73V199L600 312H735L759.5 284.5H781.5L825 330H946M944.5 309.5H931.5L923.5 318.5H830L790 276.5H752L728 301.5H606.5L498.5 194.5V69L465.5 34.5H355L341 48.5H330.5M313.5 29H476.5L509.5 64V188L612 289.5H723.5L747.5 263H795L837 306.5H920.5L934.5 293.5M918.5 286V293.5H837L798.5 254.5H742L718.5 280H617L520.5 184V59L490.5 29V22.5M507 22.5V32.5L529.5 53.5V176L596 241H802.5L819 260H830M867 245H827.5L815.5 231H598.5L542 174V49L523 32.5V22.5M539 22.5V32.5L553.5 44.5V170.5L584.5 199H593M620 173H605L591 159.5V147M602.5 147V155M580 147V153M607.5 140.5L618.5 147M607.5 129H616M607.5 118.5L621.5 110M602.5 110V98.5L609 93.5M591 110V39M574 63L580 73V110M616 210.5L653 176M651 209V203.5L672.5 184V155L651 134V82L623.5 59V27.5M635 27.5V53.5L684 100.5V188L672.5 197V209M695 200V93.5L648 49V27.5M657.5 27.5V41L706.5 86.5V188L716.5 199V209M667.5 27.5V37L716.5 82V185.5L749.5 218H815.5V225.5H829M885.5 209H759.5L728 179V80L679 32.5V27.5M700 27.5V37L737.5 74V125.5L811.5 199H851V195H870M882.5 179H859.5L851 188H817.773L749.5 119V67.5L711 32.5V27.5M726.5 27.5V32.5L755.5 57H879L885.5 49H895M771 71V66M782.5 71V66M793.5 71V66M802.5 91.5H813L820.5 82H836M802.5 100.5H827.5L843 119H853M793.5 108V116.5M782.5 108V114.5M771 108V125.5L817.773 170.5H825.5M755.5 100.5H765M765 91.5H759.5M765 80H759.5M808.5 127.5H836V136.5H902L929.5 162V264.5L966.5 301.5V378.5L920.5 423V430.5M822.5 143H894L918.5 167V241L895.5 264.5V272.5M880 159.5H894L907.5 173V236L880.5 263H873V272.5M888 118H903.5L941 152.5V261L976.5 295.5V383.5L937 422V447L934.5 462M870 83.5H888V78H941L956 66H1003.5L1037 98.5V286L1020.5 302.5V405.5L981.5 444.5V478"
          stroke="url(#paint1_radial_1_3)"
          strokeWidth="2"
          variants={pathWriter}
          initial="hidden"
          animate="visible"
          custom={0.2}
        />

        <motion.g id="CircuitLinesLeft">
          <motion.path
            id="Vector 11"
            d="M126.5 878V765.5L155 739V645.5L132.5 623H109.5"
            stroke="url(#paint2_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.4}
          />
          <motion.path
            id="Vector 5"
            d="M94 797.5H102.5"
            stroke="url(#paint3_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.6}
          />
          <motion.path
            id="Vector 9"
            d="M68.5 771H54.5L31.5 794.5V878"
            stroke="url(#paint4_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.8}
          />
          <motion.path
            id="Vector 8"
            d="M118 748L112.5 753.5H100L89.5 766.5V792.5"
            stroke="url(#paint5_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={1}
          />
          <motion.path
            id="Vector 6"
            d="M79 792V785.5"
            stroke="url(#paint6_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0}
          />
          <motion.path
            id="Vector 2"
            d="M52 877.5V854.5L68 838.5V825.5"
            stroke="url(#paint7_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.1}
          />
          <motion.path
            id="Vector 7"
            d="M111.5 782V794.5L117 798.5V878"
            stroke="url(#paint8_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.3}
          />
          <motion.path
            id="Vector 3"
            d="M78.5 825V840L84 845.5V860L94 870V878H73L68.5 868.5"
            stroke="url(#paint9_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.6}
          />
          <motion.path
            id="Vector 4"
            d="M89.5 825.5V833.5L101 845V849"
            stroke="url(#paint10_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.9}
          />
          <motion.path
            id="Vector 10"
            d="M60.5 826V835.5L40.5 854.5V886H23V794.5L31.5 786V777"
            stroke="url(#paint11_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.2}
          />
          <motion.path
            id="Vector 12"
            d="M133.5 699V691L128 686.5V679"
            stroke="url(#paint12_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.4}
          />
          <motion.path
            id="Vector 13"
            d="M128 645.5V638M116.5 645.5V638M106 645.5V638"
            stroke="url(#paint13_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.6}
          />
          <motion.path
            id="Vector 14"
            d="M31 753.5H84L108 729H126M31 743H78.5L117 705.5V678.5M31 732H74L105.5 701.5V679.5M31 721H57L81.5 695.5M31 710H51L73 689.5V676L84 666V622M31.5 701H47L62.5 686V673.5L67.5 668V638.5M31.5 691H40L51.5 679V656"
            stroke="url(#paint14_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.8}
          />

          <motion.path
            id="Vector 15"
            d="M30.5 639.5H37.5L86.5 590.5H118M30.5 628V619.5H37.5L75 582H86.5L99 567M30.5 608L73 567M30.5 593.5L51.5 573.5V568.5"
            stroke="url(#paint15_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={1}
          />
          <motion.path
            id="Vector 16"
            d="M30.5 543.5H111L117 536M30.5 533H100L115.5 516.5H130.5M30.5 519.5H96L111 503M30.5 511H88.5L100 499V470L92 462.5H69.5M30.5 499H85L90 494.5V477L85 472H68.5M40.5 478V483M51 478V487.5M62 478V485M62 434V419M51 434V428M40.5 434V423.5M69.5 449.5H92L133 407.5H173.5V410.5H200M215 395H127.5L85 439.5H68"
            stroke="url(#paint16_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.9}
          />
          <motion.path
            id="Vector 17"
            d="M35 361.5V401H29L34 435"
            stroke="url(#paint17_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.6}
          />
          <motion.path
            id="Vector 18"
            d="M35 329.5V288.5L25.5 278M52 374V288.5L25.5 262M79 411.5V357L106 332V264L95 253V234L89.5 226.5M95 395V364L116 344V258L106 249V214L89.5 195H74L68 186M123 219.5V246L129.5 253V350.5L111 368M134 374V361.5H139.5V238M159 258L149 267V341L178.5 368V371.5M56 401L68 390V366H61.5V285L25.5 249M83 311L74 302.5V280.5L25.5 236M83 267L76 262H68L46 241.5V207.5L31 189.5"
            stroke="url(#paint18_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.3}
          />
          <motion.path
            id="Vector 20"
            d="M356.5 253.5V265"
            stroke="url(#paint19_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.4}
          />
          <motion.path
            id="Vector 21"
            d="M335 455.5V463M346.5 455.5V463M357.5 455.5V463M366 428H373M366 440H402M366 450H373M357.5 419V410.5M346.5 419V400.5H380M329 428H308M329 440H321M329 450H321M335 419V413.5"
            stroke="url(#paint20_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.2}
          />
          <motion.path
            id="Vector 22"
            d="M236.5 542.5V481.5L217.5 465.5M259 542.5V511L263 499.5M269.5 542.5V515.5L281 503.5V460M236.5 586.5V594.5M248 586.5V594.5M259 586.5V594.5M269.5 586.5V594.5M286.5 582H276M230.5 582H219.5"
            stroke="url(#paint21_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.8}
          />
          <motion.path
            id="Vector 24"
            d="M218 128H260M269 186V154L308 116H358L381.5 91.5H409L425 110.5H433.5M445.5 95.5H427.5L415.5 81H375L350.5 106.5H300.5M335 91.5H348.5L375 66.5H449.5L466 83V105L455.5 118.5V211.5M286 168V154L311.5 129.5H364.5L384 151.5M384 121L427.5 165.5V208.5L421.5 216.5V237M425 133L433.5 141.5"
            stroke="url(#paint22_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.6}
          />
          <motion.path
            id="Vector 25"
            d="M226 30V63.5M237 30V37.5M245.5 41.5V30M259 30V73M269 30V37.5L279.5 47.5H287"
            stroke="url(#paint23_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={0.8}
          />
          <motion.path
            id="Vector 27"
            d="M509.5 705V716.5L487.5 737V781.5L465.5 804.5V838.5L485 858V895H495.5H498V745L531.5 712V685.5M548 648.5V712L509.5 752V879M562 685.5V700H557.5V716.5L519 758V879M574.5 700L567 707.5V723.5L531.5 764.5V879M554 753.5L540 770.5V879M577 752L557.5 779V879M572.5 776.5L567 787V879"
            stroke="url(#paint24_radial_1_3)"
            strokeWidth="2"
            variants={pathWriter}
            initial="hidden"
            animate="visible"
            custom={1}
          />
        </motion.g>
        <motion.path
          id="CircuitLineBottomLeft"
          d="M133 440V467L176.5 510.5V603.5L241 666V689.5L285.5 733.5V741M116.5 456V467L165.5 516.5V608.5L187 629.5V679L203 695.5V738L165.5 774.5V880.5M187.5 493V600L253 663V688L313 745.5H368M204.5 521L198 527.5V593.5L262.5 655.5V682L317.5 735H368M217.5 491L226 499V525.5L209.5 542V589L274.5 651V676L324 722.5H368M256.5 613V621L285.5 647V670L330.5 710.5H368M150 542V555.5L156 559.5V615.5L176.5 636V684.5L187.5 694V700M187.5 732V739.5L156 770V880.5M145.5 880.5V766L165.5 744.5V640L139 615.5V575M209.5 668V684.5L215.5 691V743L178.5 779.5V880.5M226 682V748.5L190 788V880.5M242.5 721V732L237 739.5V748.5L200 791V882M203 888H208.5V798.5L250.5 751H256.5V744.5M237 798.5L245.5 805C245.5 805 245.5 849.796 245.5 878.5M251.5 786V792.5L258 798.5V878.5M266.5 770V878.5H235.5M360.5 789.5L355 794M339 771L332 780.5H317L301 798.5V837L308.5 842.5V853M311 772L293 792.5V875.5H322.5L377 820.5V757M386.5 757V828.5L338 878.5H278V782L291 768.5M400.5 757V830L353.5 878.5H370L411 837V757M419.5 757V842.5L386.5 878.5M433 757V848L403.5 878.5V887.5H443V791L463.5 772M441.5 745.5H461M441.5 735H450.5M441.5 724H461M441.5 713H450.5M441.5 702H461M441.5 691H450.5M441.5 684.5L461 681M430 681V627.5L389.5 589.5V551L401 541.5V508.5L419 491.5M419.5 681V635L378.5 593.5V549.5L389.5 537V491.5L414.5 467H459.5L498.5 429H520.5L593 503H618L629 493.5H646M631 478.5H619.5L612 487H594.5L528 419H491L453 456.5H392M408.5 681V641L368 599V541.5L378.5 531V491.5M397.5 681V644.5L356.5 601.5V490M386.5 681V650L346 606V549.5L340 544V507M376 681V655L336 609V568L321 551V489"
          stroke="url(#paint25_radial_1_3)"
          strokeWidth="2"
          variants={pathWriter}
          initial="hidden"
          animate="visible"
          custom={1.5}
        />
        <motion.path
          id="CircuitLineCentre"
          d="M444 584.5V615.5L456.5 627M432.5 584.5V591M454 584.5V593.5L460 598.5M465.5 579.5H506L515 589M465.5 568.5H506V571.5H515M454 548V525L461.5 518M444 548V543M432.5 548V537.5M428 579.5H395.5M428 568.5H405.5M428 557.5H405.5M465.5 557.5H470.5M504.5 492.5V522.5L487.5 536V548M515 492.5V511L520.5 516V533.5M526 492.5V503.5L538 516V557.5L546 568.5V603M495.5 468H478L432.5 520M504.5 458.5V444.5M515 458.5V436M526 458.5V452M531.5 468H550M531.5 479H538M529 489.5H538M495 478.5H476.5M495.5 488.5H489M405.5 407.5H454L474 386H544L597.5 439.5H643.5L682.5 479V520M665.5 537.5V520L673.5 512.5V485.5L636.5 448.5H591L538 395H481.5L458.5 418.5H419.5V423H389.5M653 428H602.5L542 367.5H454"
          stroke="url(#paint26_radial_1_3)"
          strokeWidth="2"
          variants={pathWriter}
          initial="hidden"
          animate="visible"
          custom={2}
        />
        <motion.path
          id="CircuitLineBottom"
          d="M705.5 407.5V447L722 462V481L711.5 489.5V495.5M716.5 407.5V441L733 454.5V499.5M727 407.5V435L741 447V492.5M738 407.5V430.5L752.5 441V497M749 407.5V423.5L768.5 439V482M759 395H777L797.5 414.5H828M695.5 395H668.5L647 412.5H618.5M695.5 385.5H668.5L657 395H637M695.5 373H668.5L640.5 345.5H586L558 318H543M695.5 364.5H672.5L642.5 334H590.5L555 300.5H520.5M695.5 353H677.5L649.5 324.5H595.5L555 285.5H547.5M705.5 343V326.5H690M716.5 343V322M727 343V322M738 343V322L757.5 300.5H768.5M749 343V329L759 318H797.5L818 339.5H915.5L929 353H944M759 353H913L933.5 374.5H944M759 364.5H908.5L930.5 387.5M759 373H902.5L917 387.5V397.5M759 385.5H875.5L879.5 391H886.5M807 399.5H826V393H867L881 410H891M774.5 422.5L782.5 428.5H845.5L850.5 423.5H862.5M681.5 423.5V465L695.5 481V510L705.5 521.5H759L820 459.5H859L877 441H891M904 457H877L862 473.5H822.5L765 531.5H705.5L677 559H633L617 541.5H604M583 557.5H617L628.5 570.5H679L709 541.5H771L829.5 482H867.5V478.5H906M893.5 492.5H837L777.5 552.5H716.5L687.5 581.5H626V577H606M574 606H608L624.5 590.5H697L722 566.5H779.5L837 506H881.5V510H913M890 524.5H871V515.5H844.5L786.5 576.5H726.5L700 603H627L608 623H594.5M908 544H872L864 555.5H825.5L793.5 587H767V596H722L603 716V766.5M585 658.5H624.5M575 640.5H605.5L627 623H649M923 559H879.5L872 566.5H829.5L798.5 599H775L767 606.5H726.5L619.5 716V750M634.5 733V716L731.5 619.5H767L777.5 608.5H803L833 577H1019M924 596H879.5L869.5 585H839.5L808.5 617H786.5L775 628.5H736L651 716V757L629.5 780.5V816L620.5 823M634.5 830.5L641 823V785.5L660.5 764V719L742 640H779.5L792 628.5H818M1165.5 568.5L1114.5 617.5H972.5L950.5 639H909L900.5 649.5H749.5L672 725.5V877.5M654 797V830.5L662 839.5V882.5H682V733.5L754 662H898.5L912 674.5H933L965 640H990.5L1001.5 627.5H1120L1165.5 582H1178.5L1191.5 568.5M1195 590.5H1173.5L1126.5 639H1005L995.5 650H972.5L939.5 682.5H904.5L898.5 674.5H758L695.5 738.5V882.5H715V783L729 767.5H742M705.5 762V877.5M726 877.5V786L734 776H742M742 789H731.5M742 800H734M748 847V877.5M760.5 847V877.5M770 847V877.5M742 757H717M742 746H702M742 735H718M746 728.5V712.5M760 726.5V713.5L776 699.5H790M769.5 727.5V716M775 733.5H782L790 725.5M775 746H811M775 757H783.5M775 767.5H781M775 776H781M775 789H795.5M775 800H795.5M802 772.5V882.5H826V837.5L836.5 823V716L849 705M820.5 814V825.5L812.5 836V877.5M1001.5 662H974.5L943.5 694H886L849 730.5V825.5L836.5 841.5V882.5H858.5V854L868.5 841.5V744L898 716H958L976 696.5H1001.5V690.5H1128.5L1142 677.5V657M1158 641.5V666H1151V685L1134.5 701H1007.5V704.5H982.5L962 725.5H903L879.5 747V877.5M847.5 877.5V847.5L858.5 831.5V738.5L890.5 707H949.5L976 680H982.5M1142 568.5V574.5L1109 606.5H966.5L942 630H912L903 621H879.5L871 628.5H859.5M851 609H912L924 619.5H937L962.5 596H1103.5L1120 580.5V568.5"
          stroke="url(#paint27_radial_1_3)"
          strokeWidth="2"
          variants={pathWriter}
          initial="hidden"
          animate="visible"
          custom={2.5}
        />
        <motion.path
          id="CircuitLineRight"
          d="M1093 570.5V558L1107 544.5H1203V692V731V743M1180.5 790V768L1203 748V743M1087.5 544.5L1102 532.5H1203V411.5L1175.5 440H1158M1158 451H1180.5L1195 435.5V509.5L1184 519.5H1096V525.5H1073M1086 511H1179L1189 502V472L1180.5 463H1158M1158 473.5H1175.5L1180.5 477.5V496L1173.5 502H1116.5L1104.5 496M1112 440H1107M1112 451H1107M1112 463H1107M1112 473.5H1107M1120 477.5V496M1152.5 477.5V487M1120 426.5V433.25V440M1152.5 440V426.5M1174 624V668L1164.5 678.5V689.5L1143 710.5H1015.5V716H988.5L968 737.5H936L929 744.5V769M912.5 752V757.5L918.5 762.5V769M906 769V757.5M901.5 773H886M901.5 784.5H886M901.5 816.5H894.5M901.5 825.5H894.5M934.5 825.5H968L991 851H1000M934.5 816.5H950.5L960 811.5M934.5 794.5H1025.5L1038 783V774.5M934.5 784.5H954.5L1001 736.5H1027M934.5 773H950.5L994.5 727H1017.5L1025.5 720.5H1146L1174 695M1060 735H1172V753.5L1111 754L1098 760.5M1017 756.5H1071L1094 743H1172H1203M905 831.5V841L897 846V859M917 831.5V858M929 831.5V850L939.5 860M958 841H968L987 862.5H1000M970 866L978 877H999M1006 845V841L991 828V815M1015 845V828M1027 845V839L1040 829V815M1033 852.5H1042.5L1055 848M1033 862.5H1045L1067 858M1033 874.5H1045M1052 797V816.5L1074 835.5V885.5H1060V876M1071 780.5V816.5L1084 828L1085 877M1087.5 797V816.5L1098 825.5V878M1120 778L1108 786.5V885.5M1158.5 773H1141.5L1120 797V878M1131 878V846.5L1147 833V825.5M1158 825.5V839L1141.5 852.5V885.5M1169.5 825.5V835.5L1175.5 842V860.5L1186.5 868.5V878H1156.5V866M1179.5 825.5V831L1193.5 844V850M1185 797H1192.5M1169.5 790V785M1158 790V785M1147 790V785M1143 797H1134.5M1185.5 398V387L1180 382V362L1203 340V222L1178 195.5H1166L1157 185M1180 223.5L1191 234V335L1168.5 356.5V411.5M1144.5 402.5L1158 389V364H1152.5V287.5L1103 237.5V185L1109 178V164M1118.5 226V237.5L1163 282V304.5L1176 314M1123.5 194L1136.5 209V237.5L1175 272M1142 375.5V292L1092.5 241V72.5L1076.5 59V38.5M1058 51.5L1065.5 57.5V65L1081 78.5V247.5L1126.5 294.5V327.5M1135 159V21.5H1157V146L1178 167.5H1195.5V21.5H1169V135L1180 145.5M1055 280V268.5L1049.5 261V91.5L1011.5 55H952L932 70H815.5L802 85M1074 280V272L1061 258.5V87.5L1017 45.5H950L941.5 51.5H930M998 29.5H1014.5L1071.5 82.5V254L1108 291V399.5L1096.5 412H1031.5L994 449.5V477.5M1147 27.5V151.5L1175.5 180M764 29.5H740L762.5 47H871.5L883 35H963.5L981.5 14H1036.5V23.5M906.5 94.5H920.5L925 91.5H948L965.5 78.5H998L1026 106.5V280L1010.5 296.5V401L968 441.5V477.5M922 110.5H929L938.5 100H955L967 89.5H992.5L1013 109V208.5M958 477.5L956.5 434L997.5 396V291L1013 274V219.5M957 159.5V167L948 175V254.5L986 291V390L946.5 428V477.5M961 132L973 143.5V170M982 115V136L985 142V170M996.5 133.5L992.5 143.5V170M998 186.5H1002M998 198H1004M998 208.5H1013M1013 208.5V219.5M998 219.5H1013M998 231H1006.5M998 242H1006.5M973 246V254.5M983.5 246V255.5M995 246V259M966 176.5H953.5M966 186.5H953.5M966 198H961M966 208.5H961M966 219.5H961M966 231H957M966 242H957M1014 488.5H1026L1038 476V466M1014 499.5H1032L1053 476V451M1014 510H1038L1067 476H1071V466M1014 521H1042L1080 476H1086V448.5M1014 532.5H1042L1069 558V570.5M1014 544.5H1038L1047 553V570.5M981.5 554V561.5H1018M970.5 554V570.5M959.5 554V563M938.5 532.5H930M938.5 521H930M938.5 511H930M938.5 499.5H930M938.5 488.5H930M1004.5 477.5V455.5L1036.5 423H1102L1125 401V362.5"
          stroke="url(#paint28_radial_1_3)"
          strokeWidth="2"
          variants={pathWriter}
          initial="hidden"
          animate="visible"
          custom={3}
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(290.75 364.25) rotate(90) scale(337.25 244.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(596 250.25) rotate(90) scale(227.75 441)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(132.25 750.5) rotate(90) scale(127.5 22.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint3_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(98.25 798) rotate(90) scale(0.5 4.25)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint4_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(50 824.5) rotate(90) scale(53.5 18.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint5_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(103.75 770.25) rotate(90) scale(22.25 14.25)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint6_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(79.5 788.75) rotate(90) scale(3.25 0.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint7_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(60 851.5) rotate(90) scale(26 8)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint8_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(114.25 830) rotate(90) scale(48 2.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint9_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(81.25 851.5) rotate(90) scale(26.5 12.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint10_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(95.25 837.25) rotate(90) scale(11.75 5.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint11_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(41.75 831.5) rotate(90) scale(54.5 18.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint12_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(130.75 689) rotate(90) scale(10 2.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint13_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(117 641.75) rotate(90) scale(3.75 11)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint14_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(78.5 687.75) rotate(90) scale(65.75 47.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint15_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(74.25 603.25) rotate(90) scale(36.25 43.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint16_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(122.75 469.25) rotate(90) scale(74.25 92.25)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint17_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32 398.25) rotate(90) scale(36.75 3)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint18_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(102 298.75) rotate(90) scale(112.75 76.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint19_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(357 259.25) rotate(90) scale(5.75 0.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint20_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(355 431.75) rotate(90) scale(31.25 47)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint21_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(252 527.25) rotate(90) scale(67.25 34.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint22_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(342 151.75) rotate(90) scale(85.25 124)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint23_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256.5 51.5) rotate(90) scale(21.5 30.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint24_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(521.25 771.75) rotate(90) scale(123.25 55.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint25_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(381.25 653.5) rotate(90) scale(234.5 264.75)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint26_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(536 497.25) rotate(90) scale(129.75 146.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint27_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(857.75 584) rotate(90) scale(298.5 337.25)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
        <radialGradient
          id="paint28_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(971.5 449.75) rotate(90) scale(435.75 231.5)"
        >
          <stop
            offset="0.07"
            stopColor="#2A0034"
          />
          <stop
            offset="0.25"
            stopColor="#7E318F"
          />
          <stop
            offset="0.47"
            stopColor="#94B959"
          />
          <stop
            offset="0.49"
            stopColor="#94B959"
          />
          <stop
            offset="0.59"
            stopColor="#A969B9"
          />
          <stop
            offset="0.78"
            stopColor="#6D0C85"
          />
          <stop
            offset="0.88"
            stopColor="#57006C"
          />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}

export default CircuitBoard;
