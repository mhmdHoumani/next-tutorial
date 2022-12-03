import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export type Event = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
};

const Events = ({ events }: { events: Event[] }) => {
  //   const [isLoading, setIsLoading] = useState(true);
  const [filteredEvents, setEvents] = useState<Event[]>(events);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:5050/events?category=sports",
      {
        method: "GET",
      }
    );
    const data: Event[] = await response.json();
    setEvents(data);
    // setIsLoading(false);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  const resetFilter = async () => {
    const response = await fetch("http://localhost:5050/events", {
      method: "GET",
    });
    const data: Event[] = await response.json();
    setEvents(data);
    router.push("/events", undefined, { shallow: true });
  };

  return (
    <>
      <h1 className="px-4 py-8 text-3xl font-bold">List of news</h1>
      <button className="border-2 p-2 px-4" onClick={fetchSportsEvents}>
        Sports Events
      </button>
      <button className="border-2 p-2 px-4" onClick={resetFilter}>
        Reset Filter
      </button>
      {filteredEvents.map((event) => (
        <div key={event.id} className="p-4 shadow">
          <h2 className="text-lg font-bold">
            {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
        </div>
      ))}
    </>
  );
};

export default Events;

export async function getServerSideProps(context: any) {
  const { query } = context;
  const queryString = query.category ? "category=sports" : "";
  const response = await fetch(`http://localhost:5050/events?${queryString}`);
  const data: Event[] = await response.json();
  return {
    props: {
      events: data,
    },
  };
}
