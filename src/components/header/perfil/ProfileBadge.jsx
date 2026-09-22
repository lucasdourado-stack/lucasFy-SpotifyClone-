import Avatar from "./Avatar";
import images from "../../../assets/images.png";

function ProfileBadge() {
  return (
    <>
      <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-semibold">
        <Avatar imgUrl={images} />

        <a href="http://">Meu Perfil</a>
      </div>
    </>
  );
}
export default ProfileBadge;
