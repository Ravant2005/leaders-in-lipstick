import { db } from "../lib/db/src/index";
import { membersTable, programsTable, eventsTable, resourcesTable } from "../lib/db/src/schema/index";

async function seed() {
  console.log("Seeding database...");

  // Members
  await db.insert(membersTable).values([
    { name: "Sarah Jenkins", role: "CEO Vita Beauty & Officer", location: "New York", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop" },
    { name: "Dina Batista", role: "SVP, Strategy & CEO", location: "London", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" },
    { name: "Michelle Chan", role: "VP GTM Partnerships", location: "San Francisco", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop" },
    { name: "Amelia Patel", role: "Founder & CEO Patel Finance", location: "London", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop" },
    { name: "Dr. Olivia Yuen", role: "Founder Innovater", location: "Sydney", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop" },
    { name: "Phil Simmons", role: "Founder & Co-founder", location: "Sydney", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop" },
  ]);

  // Programs
  await db.insert(programsTable).values([
    {
      title: "Boardroom Mentorship",
      category: "Leadership Development",
      description: "A 6-month intensive for directors and VP-level leaders preparing for C-suite transition.",
      duration: "6 Months",
      overview: "Master the dynamics of boardrooms.",
    },
    {
      title: "Personal Brand Building",
      category: "Personal Branding",
      description: "Transform your expertise into industry authority.",
      duration: "4 Weeks",
    }
  ]);

  // Events
  await db.insert(eventsTable).values([
    {
      title: "Annual Leadership Summit",
      type: "Summit",
      description: "Our flagship event for women leaders.",
      date: "2026-10-15",
      location: "London, UK",
    }
  ]);

  console.log("Seeding completed!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
