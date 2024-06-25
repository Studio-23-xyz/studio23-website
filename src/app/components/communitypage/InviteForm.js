// src/app/components/communitypage/InviteForm.js

"use client";
import React, { useState } from "react";
import { Octokit } from "@octokit/rest";
const InviteForm = () => {
  const [githubUsername, setGithubUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
      });

      const orgName = "Game-Developer-Community-Bangladesh"; // Replace with your organization name

      try {
        const { data: user } = await octokit.users.getByUsername({
          username: githubUsername,
        });
        const response = await octokit.orgs.createInvitation({
          org: orgName,
          invitee_id: user.id,
        });

        console.log("Invitation sent successfully:", response);
      } catch (error) {
        console.error("Error sending invitation:", error);
      }
    } catch (error) {
      console.error("Error sending invite:", error);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Invite to GitHub Organization
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="githubUsername"
            className="block text-sm font-medium text-gray-700"
          >
            GitHub Username
          </label>
          <input
            type="text"
            id="githubUsername"
            name="githubUsername"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            required
            className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send Invite
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default InviteForm;
