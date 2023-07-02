import { NextResponse } from "next/server";

export async function GET() {
    const COMPANIES = [
      {
        label: "Capri Global Capital Ltd.",
        image: "/images/caprinew1.jpeg",
      },
      {
        label: "Infibeam Avenues Ltd.",
        image: "/images/infibeamavenues.png",
      },
      {
        label: "Data Patterns (India) Ltd.",
        image: "/images/dtpattern.png",
      },
      {
        label: "Ganesh Housing Corporation Ltd.",
        image: "/images/ganeshhousing.jpeg",
      },
      {
        label: "Ganesh Housing Corporation Ltd.",
        image: "/images/godawari.jpeg",
      },
      {
        label: "H.G. Infra Engineering Ltd.",
        image: "/images/hginfra.jpeg",
      },
      {
        label: "Laxmi Organic Industries Ltd.",
        image: "/images/lx2.png",
      },
      {
        label: "Man InfraConstruction Ltd.",
        image: "/images/meghmani.png",
      },
      {
        label: "Meghmani Finechem Ltd.",
        image: "/images/maninfraconstruct.png",
      },
    ];
    return NextResponse.json({ companies: COMPANIES });
}