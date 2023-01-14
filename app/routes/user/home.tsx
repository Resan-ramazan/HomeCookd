import { getRandomMeals } from "~/models/meals.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { json, LoaderArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const meals = await getRandomMeals();
  return json({ meals });
}

export default function HomePage() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  return (
    <div className="p-4 w-full h-full">
      <Link
        to="/user/subscriptions"
        className="text-xl text-primary"
      >
        View your subscriptions
      </Link>
    </div>
  );
}