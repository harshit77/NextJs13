import { NextResponse } from "next/server";

export async function GET() {
    const filterOptions = [
      {
        label: "Section 1",
        variant: "primary",
      },
      {
        label: "Section 2",
        variant: "secondary",
      },
      {
        label: "Section 3",
        variant: "ternary",
      },
    ];
    const comments = [
      {
        image: "",
        avatar: "ri-user-2-fill",
        name: "Lorem Ipsum",
        filterType: {
          label: "Section1",
          variant: "primary",
        },
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada venenatis ultrices. Curabitur maximus consectetur enim, quis egestas elit commodo in",
        liked: "1k",
        viewed: "3k",
        comments: "2k",
      },
      {
        image: "",
        avatar: "ri-user-6-fill",
        name: "Lorem Ipsum",
        filterType: {
          label: "Section2",
          variant: "secondary",
        },
        message:
          "Donec non euismod sapien. Nam eget feugiat ex. Maecenas blandit leo non malesuada semper. Maecenas tristique efficitur velit eget accumsan. Ut scelerisque vitae risus sed auctor",
        liked: "900",
        viewed: "2k",
        comments: "1k",
      },
      {
        image: "",
        avatar: "user-2-fill",
        name: "Lorem Ipsum",
        filterType: {
          label: "Section3",
          variant: "ternary",
        },
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada venenatis ultrices. Curabitur maximus consectetur enim, quis egestas elit commodo in",
        liked: "1k",
        viewed: "2k",
        comments: "1k",
      },
      {
        image: "",
        avatar: "ri-user-2-fill",
        name: "Lorem Ipsum",
        filterType: {
          label: "Section1",
          variant: "primary",
        },
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada venenatis ultrices. Curabitur maximus consectetur enim, quis egestas elit commodo in",
        liked: "500",
        viewed: "1k",
        comments: "12",
      },
      {
        image: "",
        avatar: "ri-user-2-fill",
        name: "Lorem Ipsum",
        filterType: {
          label: "Section1",
          variant: "primary",
        },
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada venenatis ultrices. Curabitur maximus consectetur enim, quis egestas elit commodo in",
        liked: "92",
        viewed: "2k",
        comments: "128",
      },
      {
        image: "",
        avatar: "ri-user-2-fill",
        name: "Lorem Ipsum",
        filterType: {
          label: "Section1",
          variant: "primary",
        },
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada venenatis ultrices. Curabitur maximus consectetur enim, quis egestas elit commodo in",
        liked: "12",
        viewed: "1k",
        comments: "428",
      },
      {
        image: "",
        avatar: "ri-user-2-fill",
        name: "Lorem Ipsum",
        filterType: {
          label: "Section1",
          variant: "primary",
        },
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada venenatis ultrices. Curabitur maximus consectetur enim, quis egestas elit commodo in",
        liked: "12",
        viewed: "2k",
        comments: "100",
      },
      {
        image: "",
        avatar: "ri-user-2-fill",
        name: "Lorem Ipsum",
        filterType: {
          label: "Section1",
          variant: "primary",
        },
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada venenatis ultrices. Curabitur maximus consectetur enim, quis egestas elit commodo in",
        liked: "12",
        viewed: "129",
        comments: "120",
      },
    ];
  return NextResponse.json({ filterOptions, comments });
}
