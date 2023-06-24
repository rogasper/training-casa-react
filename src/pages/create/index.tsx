import { useState } from "react";

export default function Page() {
  return (
    <main>
      <form
        className="flex flex-col gap-4 m-auto5"
        action={"api/resort/create"}
        method="POST"
      >
        <input
          type="text"
          placeholder="enter new country"
          name="country"
          className="w-1/2 p-3 mx-auto mt-5 border"
        />
        <button className="px-6 py-4">Submit</button>
      </form>
    </main>
  );
}
