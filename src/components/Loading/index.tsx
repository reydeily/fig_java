import { useLottie } from "lottie-react";
import loading from '../../lottie/Animation - 1701262315443.json'
export default function Loading() {

  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, { height: 300 });

  return View;
}