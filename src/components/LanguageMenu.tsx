export function LanguageMenu() {
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLang = e.currentTarget.value;
    const [_leadingSlash, _oldLang, ...rest] = window.location.pathname.split("/");
    const slug = rest.join("/");
    window.location.pathname = `/${newLang}/${slug}`;
  }

  return (
    <select className="p-2 border rounded" onChange={onChange}>
      <option value="nl">NL</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}
