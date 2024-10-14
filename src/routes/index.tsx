import SocialLinks from "../component/molecules/SocialLinks.tsx";
import SoftwareList from "../component/molecules/SoftwareList.tsx";

export default function Home() {
  return (
    <div class="container mx-auto max-w-12xl mb-24">
      <div>
        <img
          src="/logo.png"
          alt="My avater"
          class="mx-auto mt-60"
          width="200"
          height="300"
        />
        <h1 class="text-4xl text-center mt-8">Sho Sakuma</h1>
      </div>
      <hr class="w-1/2 mx-auto mt-5 border-gray-500" />
      <SocialLinks />
      <SoftwareList />
    </div>
  );
}
