import BarraPesquisa from "./pesquisa/BarraPesquisa";
import ButtonWhite from "../button/ButtonWhite";
import TextButton from "../button/TextButton";
import ProfileBadge from "./perfil/ProfileBadge";
const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-black pt-2 pl-2 pr-2 flex items-center justify-between gap-5">
      <ProfileBadge />

      <BarraPesquisa />

      <div className="flex gap-4 items-center ">
        <TextButton label="Inscrever-se" />
        <ButtonWhite label="Entrar" />
      </div>
    </header>
  );
};

export default Header;
