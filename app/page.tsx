import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import {Landing} from "@/app/components/landing/landing";

export default function IndexPage() {
  return(
  <Landing/>);
}

export const metadata: Metadata = {
  title: "QOHR",
};
