import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { Technologies } from "@/components/home/Technologies";
import { Training } from "@/components/home/Training";
import { Consulting } from "@/components/home/Consulting";
import { Cases } from "@/components/home/Cases";
import { Method } from "@/components/home/Method";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return <><Header/><main><Hero/><Solutions/><Technologies/><Training/><Consulting/><Cases/><Method/><Contact/></main><Footer/></>;
}
