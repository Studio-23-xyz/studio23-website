"use client";
import React, { useState } from "react";
import { Octokit } from "@octokit/rest";
import GitHubLogo from "../../../../public/assets/community-page/git_round1.png";

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
    <div className="w-full max-w-md mx-auto mt-10 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
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
          className="w-full bg-studio_blue text-black text-[16px] font-bold px-6 py-3 rounded-lg shadow-md hover:bg-white transition duration-300
            flex gap-3 items-center justify-center"
        >
          Join Github
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default InviteForm;
