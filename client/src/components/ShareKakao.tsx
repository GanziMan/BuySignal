"use client";

import { Share2Icon } from "@radix-ui/react-icons";
import { useEffect } from "react";

interface LinkType {
  mobileWebUrl: string;
  webUrl: string;
}

declare global {
  interface Window {
    Kakao: any;
  }
}
export default function ShareKakao({
  title,
  imageUrl,
  link,
}: {
  title: string;
  imageUrl: string;
  link: LinkType;
}) {
  const handleShare = () => {
    window.Kakao?.Share?.sendDefault({
      objectType: "feed",
      content: {
        title: "",
        description: "",
        imageUrl: "",
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      social: {
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  };
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Kakao) {
      const script = document?.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.onload = () => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY!);
      };
      document?.body.appendChild(script);
    } else if (
      typeof window !== "undefined" &&
      window.Kakao &&
      !window.Kakao.isInitialized()
    ) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY!);
    }
  }, []);

  return <Share2Icon width={25} height={25} onClick={handleShare} />;
}
