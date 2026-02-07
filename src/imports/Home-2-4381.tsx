import svgPaths from "./svg-dggklstti";
import imgImage1 from "figma:asset/f357b2379de4744d9ce74b316cb53882b3926676.png";
import imgImage6 from "figma:asset/b20faf258c63686adc5f3e65dcf827fe35a5d1df.png";
import imgRectangle2 from "figma:asset/168a40fd939835c10f602a3777f56058a29180aa.png";
import imgRectangle3 from "figma:asset/5e105b8213775db503e3fcbb1c29a5ee6227673f.png";
import imgRectangle4 from "figma:asset/ffd0c74991a6e53a424dda890b6ea88ca41437ac.png";
import imgRectangle5 from "figma:asset/f2bd0d9ad5da0588547a204b062cf500bcf2f8b4.png";
import imgRectangle6 from "figma:asset/744654926be46090c598f8028f68b208794304c3.png";
import imgHome from "figma:asset/0a20cf2467d663f5e6fc0094367514a5f9c56cfd.png";
import imgImage7 from "figma:asset/9de9fbc11cb73c66533a4f8a7a524ef066927a2b.png";
import imgImage2 from "figma:asset/68cecdc21ba2777999dbc55c22ae13da4d2b5e34.png";

function Frame2() {
  return (
    <div className="capitalize content-stretch flex font-['Hind:Medium',sans-serif] gap-[40px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px]">
      <p className="relative shrink-0">Our Services</p>
      <p className="relative shrink-0">Contact Us</p>
      <p className="relative shrink-0">Permit order form</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0">
      <div className="h-[89px] mix-blend-darken relative shrink-0 w-[96px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.29%] left-[-10.28%] max-w-none top-[-9.09%] w-[119.63%]" src={imgImage1} />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function MembersHeader() {
  return (
    <div className="bg-[#0d0d0e] content-stretch flex h-full items-center justify-center px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name=". Members header">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] text-center">Sign up</p>
    </div>
  );
}

function MembersHeader1() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[24px] py-[16px] relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0" data-name=". Members header">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[20px] text-center">Log in</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <MembersHeader />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <MembersHeader1 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[100px] py-[20px] top-0 w-[1240px]">
      <Frame6 />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center not-italic relative shrink-0 text-[#0d0d0e] whitespace-pre-wrap">
      <div className="font-['Hind:Medium',sans-serif] leading-[47px] relative shrink-0 text-[48px] uppercase w-full">
        <p className="mb-0">{`OVERSIZE & OVERWEIGHT`}</p>
        <p>Permitting Solutions</p>
      </div>
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] w-full">Providing comprehensive planning solutions to streamline your permitting needs.</p>
    </div>
  );
}

function MembersHeader2() {
  return (
    <div className="bg-[#0d0d0e] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name=". Members header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] text-center">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

function MembersHeader3() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)]" data-name=". Members header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[20px] text-center">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <MembersHeader2 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <MembersHeader3 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-[616px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[24px] text-center">Voices of Satisfied Clients</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[200px] shrink-0 size-[60px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[20px] text-center">ATC Transport</p>
    </div>
  );
}

function MembersHeader4() {
  return (
    <div className="bg-white relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name=". Members header">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[40px] py-[20px] relative w-full">
          <Frame8 />
          <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[20px] w-full whitespace-pre-wrap">I recently had the pleasure of working with LYNX for obtaining over-dimensional permits for my trucking business, and I must say, their service was impeccable. From the initial contact to the final execution, their team demonstrated professionalism, deep knowledge, and efficiency.</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame21 />
      <MembersHeader4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start justify-center relative shrink-0 w-[616px]">
      <Frame />
      <Frame9 />
    </div>
  );
}

function Home1() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col gap-[80px] h-[1024px] items-start justify-center pl-[100px] relative shrink-0 w-[1440px]" data-name="home">
      <div className="absolute flex h-[1025px] items-center justify-center left-[calc(58.33%-12px)] top-0 w-[612px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[1025px] relative rounded-br-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] w-[612px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-br-[32px]">
              <img alt="" className="absolute h-full left-[-14.96%] max-w-none top-0 w-[251.29%]" src={imgRectangle2} />
            </div>
          </div>
        </div>
      </div>
      <Frame3 />
      <Frame7 />
    </div>
  );
}

function MembersHeader5() {
  return (
    <div className="bg-white h-[46px] relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name=". Members header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[20px] text-center">Start permitting</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[512px]">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] not-italic relative shrink-0 text-[#0d0d0e] text-[40px] w-full whitespace-pre-wrap">Permitting Procedures</p>
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-full whitespace-pre-wrap">{`When you choose us to handle your permits, you're not just another client; you're a partner. We're dedicated to ensuring your best interests are at the forefront of every decision we make. We don't just process permits; we optimize your routes for maximum efficiency. Your success is our success, and that's a commitment you can count on.`}</p>
      <MembersHeader5 />
    </div>
  );
}

function Home2() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex items-center justify-between px-[100px] py-[60px] relative shrink-0 w-[1440px]" data-name="home">
      <div className="h-[418px] relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-[616px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgRectangle3} />
      </div>
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center not-italic relative shrink-0 text-[#0d0d0e] text-center w-full whitespace-pre-wrap">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] relative shrink-0 text-[40px] w-full">Our Services</p>
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] w-full">We provide comprehensive services in the Logistics and Permitting industry, ensuring smooth operations and compliance with all regulations.</p>
    </div>
  );
}

function MembersHeader6() {
  return (
    <div className="bg-[#0d0d0e] h-[46px] relative rounded-[32px] shrink-0 w-full" data-name=". Members header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] text-center">More about service</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative w-full">
        <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[24px] w-full whitespace-pre-wrap">Permit Acquisition</p>
        <p className="font-['Hind:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-full whitespace-pre-wrap">Our Permit Acquisition service ensures you have all necessary permits for your logistics operations. We handle the process, saving you time and stress.</p>
        <MembersHeader6 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)]">
      <div className="h-[182px] relative rounded-[32px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgRectangle4} />
      </div>
      <Frame14 />
    </div>
  );
}

function MembersHeader7() {
  return (
    <div className="bg-[#0d0d0e] h-[46px] relative rounded-[32px] shrink-0 w-full" data-name=". Members header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] text-center">More about service</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative w-full">
        <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[24px] w-full whitespace-pre-wrap">Logistics Management</p>
        <p className="font-['Hind:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-full whitespace-pre-wrap">Our Permit Acquisition service ensures you have all necessary permits for your logistics operations. We handle the process, saving you time and stress.</p>
        <MembersHeader7 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)]">
      <div className="h-[182px] relative rounded-[32px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgRectangle5} />
      </div>
      <Frame16 />
    </div>
  );
}

function MembersHeader8() {
  return (
    <div className="bg-[#0d0d0e] h-[46px] relative rounded-[32px] shrink-0 w-full" data-name=". Members header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] text-center">More about service</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative w-full">
        <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[24px] w-full whitespace-pre-wrap">Compliance Consulting</p>
        <p className="font-['Hind:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-full whitespace-pre-wrap">Our Permit Acquisition service ensures you have all necessary permits for your logistics operations. We handle the process, saving you time and stress.</p>
        <MembersHeader8 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)]">
      <div className="h-[182px] relative rounded-[32px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgRectangle6} />
      </div>
      <Frame18 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Frame12 />
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Home3() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col gap-[40px] items-start justify-center overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1440px]" data-name="home">
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-full items-start justify-center not-italic relative shrink-0 text-[#0d0d0e] w-[512px] whitespace-pre-wrap">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] relative shrink-0 text-[40px] w-full">{`Reach Out to Us for Your Logistics & Permitting Needs`}</p>
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] w-full">{`Have questions or need assistance with logistics and permitting? Don't hesitate to contact us. We're here to help you navigate the process with ease.`}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.86%_2.99%]" data-name="Group">
      <div className="absolute inset-[-1.81%_-1.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.9999 57.125">
          <g id="Group">
            <path d={svgPaths.p163e6080} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M14.7813 10.8446H26.5938" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M14.7813 16.7507H42.3438" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M14.7813 22.6563H34.4688" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p2f907600} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="overflow-clip relative shrink-0 size-[67px]" data-name="Layer_1">
      <Group />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Layer />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame23 />
      <div className="capitalize font-['Hind:SemiBold',sans-serif] leading-[35px] not-italic relative shrink-0 text-[#0d0d0e] text-[28px] whitespace-nowrap">
        <p className="mb-0">Feel free to ask us</p>
        <p>to contact you</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,13,14,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">name</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,13,14,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">email</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,13,14,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">phone</p>
        </div>
      </div>
    </div>
  );
}

function MembersHeader9() {
  return (
    <div className="bg-[#0d0d0e] h-[46px] relative rounded-[32px] shrink-0 w-full" data-name=". Members header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] text-center">send</p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <MembersHeader9 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col gap-[20px] items-start justify-center p-[40px] relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-[616px]">
      <Frame22 />
      <Frame24 />
    </div>
  );
}

function Home4() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex items-center justify-between overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1440px]" data-name="home">
      <div className="flex flex-row items-center self-stretch">
        <Frame19 />
      </div>
      <Frame20 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="h-[201px] relative shrink-0 w-[226px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 201">
          <g id="Vector">
            <path d={svgPaths.p251b3100} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p18acf680} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p1bf26480} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p2ec1ecf0} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p306bd480} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.pb1f0a80} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p841a900} fill="var(--fill-0, #FCFCFC)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-full items-start justify-center not-italic relative shrink-0 text-[#fcfcfc] w-[616px] whitespace-pre-wrap">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] relative shrink-0 text-[40px] w-full">Our Mission</p>
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] w-full">Our mission is to streamline logistics and permitting processes, ensuring efficient, compliant operations. We strive to provide top-tier service, fostering growth and success for our clients.</p>
    </div>
  );
}

function Home5() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-end overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1440px]" data-name="home">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHome} />
        <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] inset-0 to-[74.024%] to-black" />
      </div>
      <Frame28 />
      <div className="flex flex-row items-center self-stretch">
        <Frame29 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-full items-start justify-center not-italic relative shrink-0 text-[#0d0d0e] w-[512px] whitespace-pre-wrap">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] relative shrink-0 text-[40px] w-full">Discover Something New With Every Visit!</p>
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] w-full">{`Step into our world and experience a place where every visit is a new adventure. We're not just a destination, we're an experience. From the moment you walk through our doors, you'll be greeted with a warm welcome and a friendly smile. Our team is always ready to assist and make your visit as enjoyable as possible. We pride ourselves on our commitment to customer satisfaction and strive to exceed your expectations. So why wait? Come in and see us today. We promise, you won't be disappointed!`}</p>
    </div>
  );
}

function Home6() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex items-center justify-between overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1440px]" data-name="home">
      <div className="h-[451px] relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-[616px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgImage7} />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame30 />
      </div>
    </div>
  );
}

function LocationOn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="location_on">
          <mask height="24" id="mask0_1_633" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_633)">
            <path d={svgPaths.p1179fd00} fill="var(--fill-0, #1C1B1F)" id="location_on_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <LocationOn />
      <a className="block font-['Hind:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-[476px]" href="tel:8475950652">
        <p className="cursor-pointer leading-[normal] whitespace-pre-wrap">800 Roosevelt Rd, A-340 Glen Ellyn, IL 60137</p>
      </a>
    </div>
  );
}

function Call() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="call">
          <mask height="24" id="mask0_1_613" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_613)">
            <path d={svgPaths.pb384280} fill="var(--fill-0, #1C1B1F)" id="call_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Call />
      <p className="flex-[1_0_0] font-['Hind:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">847-595-0652</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start justify-center relative shrink-0 w-full">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Social() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_623)" id="Social">
          <path d={svgPaths.p1fb59100} fill="var(--fill-0, #0D0D0E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_623">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Social1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social">
          <g id="Vector">
            <path d={svgPaths.p37059e00} fill="var(--fill-0, #0D0D0E)" />
            <path clipRule="evenodd" d={svgPaths.pf2a8b00} fill="var(--fill-0, #0D0D0E)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p17a7ae00} fill="var(--fill-0, #0D0D0E)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Social2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social">
          <path clipRule="evenodd" d={svgPaths.p280b8780} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Social />
      <Social1 />
      <Social2 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[512px]">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] min-w-full not-italic relative shrink-0 text-[#0d0d0e] text-[40px] w-[min-content] whitespace-pre-wrap">Contact Us</p>
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-[min-content] whitespace-pre-wrap">{`Got questions? We're here to help! Reach out to us today.`}</p>
      <Frame32 />
      <Frame35 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,13,14,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[normal] lowercase min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">name</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,13,14,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[normal] lowercase min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">email</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,13,14,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[normal] lowercase min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">Phone number</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,13,14,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[normal] lowercase min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">Subject</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(13,13,14,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[normal] lowercase min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[18px] whitespace-pre-wrap">{`Message `}</p>
        </div>
      </div>
    </div>
  );
}

function MembersHeader10() {
  return (
    <div className="bg-[#0d0d0e] h-[46px] relative rounded-[32px] shrink-0 w-full" data-name=". Members header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[20px] text-center">send</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <MembersHeader10 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col gap-[20px] items-start justify-center p-[40px] relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-[616px]">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[35px] not-italic relative shrink-0 text-[#0d0d0e] text-[28px]">Contact Form</p>
      <Frame37 />
    </div>
  );
}

function Home7() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex items-center justify-between overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1440px]" data-name="home">
      <Frame31 />
      <Frame36 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[409px]">
      <div className="h-[89px] mix-blend-plus-lighter relative shrink-0 w-[96px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.29%] left-[-10.28%] max-w-none top-[-9.09%] w-[119.63%]" src={imgImage2} />
        </div>
      </div>
      <p className="capitalize flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#fcfcfc] text-[18px] whitespace-pre-wrap">Streamlining Logistics and Permitting for Your Business Success</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="capitalize content-stretch flex flex-[1_0_0] flex-col font-['Hind:Medium',sans-serif] gap-[20px] items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative text-[#fcfcfc] text-[18px]">
      <p className="relative shrink-0">Our Services</p>
      <p className="relative shrink-0">Contact Us</p>
      <p className="relative shrink-0">Permit order form</p>
    </div>
  );
}

function LocationOn1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="location_on">
          <mask height="24" id="mask0_1_603" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_603)">
            <path d={svgPaths.p1179fd00} fill="var(--fill-0, #FCFCFC)" id="location_on_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <LocationOn1 />
      <p className="font-['Hind:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[18px] w-[476px] whitespace-pre-wrap">800 Roosevelt Rd, A-340 Glen Ellyn, IL 60137</p>
    </div>
  );
}

function Call1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="call">
          <mask height="24" id="mask0_1_617" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_617)">
            <path d={svgPaths.pb384280} fill="var(--fill-0, #FCFCFC)" id="call_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Call1 />
      <p className="flex-[1_0_0] font-['Hind:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#fcfcfc] text-[18px] whitespace-pre-wrap">847-595-0652</p>
    </div>
  );
}

function Social3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_597)" id="Social">
          <path d={svgPaths.p1fb59100} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_597">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Social4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social">
          <g id="Vector">
            <path d={svgPaths.p37059e00} fill="var(--fill-0, #FCFCFC)" />
            <path clipRule="evenodd" d={svgPaths.pf2a8b00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p17a7ae00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Social5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social">
          <path clipRule="evenodd" d={svgPaths.p280b8780} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Social3 />
      <Social4 />
      <Social5 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start justify-center relative shrink-0 w-[512px]">
      <Frame48 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[60px] items-center min-h-px min-w-px overflow-clip relative self-stretch">
      <Frame45 />
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1240px]">
      <Frame44 />
    </div>
  );
}

function Home8() {
  return (
    <div className="bg-[#0d0d0e] content-stretch flex items-center justify-between overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1440px]" data-name="home">
      <Frame43 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="content-stretch flex flex-col items-end relative size-full" data-name="home">
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
    </div>
  );
}