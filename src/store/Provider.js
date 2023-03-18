import Context from "./Context";
import {
  faLanguage,
  faQuestion,
  faKeyboard,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
const state = {
  listAccount: [
    {
      image:
        "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1679295600&x-signature=g3XayNOSRdzY8m9cdpTA1N1x8SM%3D",
      name: "annhien_boiboi",
      sub_name: "AnNhiên ❤️ BốiBối",
      check: true,
    },
    {
      image:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_100x100.jpeg?x-expires=1679295600&x-signature=DuGw9qs%2FcvmzluAIWGg%2FYC1XMAc%3D",
      name: "datvilla94",
      sub_name: "🔥Đạt Villa🔥",
    },
    {
      image:
        "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2f1e2a4fa8bc91de38d1c4e926d19cba~c5_100x100.jpeg?x-expires=1679295600&x-signature=En6prnZmXSx2eoYTYi62Hy%2FvnEs%3D",
      name: "vietphuongthoa98",
      sub_name: "Việt Phương Thoa",
      check: true,
    },
    {
      image:
        "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0995309d9b40283f49325641059892f6~c5_100x100.jpeg?x-expires=1679299200&x-signature=PjQfPN1wK83ndbrgjENMJHv8FOI%3D",
      name: "manhtienkhoi_",
      sub_name: "Mạnh Tiến Khôi 🐯",
      check: true,
    },
  ],
  listMenu: [
    {
      title: "Tiếng Việt",
      icon: faLanguage,
    },
    {
      title: "Phản hồi và trợ giúp",
      icon: faQuestion,
    },
    {
      title: "Phím tắt trên bàn phím",
      icon: faKeyboard,
    },
    {
      title: "Chế độ tối",
      icon: faMoon,
    },
  ],
};
function Provider({ children }) {
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default Provider;
