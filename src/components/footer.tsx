export function Footer() {
  return (
    <footer className="py-10 px-4 mt-10 border-t border-border-secondary border-dashed">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sobre a loja */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Sobre nós</h2>
          <p className="text-sm">
            Somos uma loja comprometida com qualidade, bom atendimento e os melhores produtos para você.
          </p>
        </div>

        {/* Links úteis */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Categorias</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Nike</a></li>
            <li><a href="#" className="hover:underline">Adidas</a></li>
            <li><a href="#" className="hover:underline">Puma</a></li>
            <li><a href="#" className="hover:underline">Converse</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contato</h2>
          <ul className="text-sm space-y-2">
            <li>Email: ecommerce@gmail.com</li>
            <li>WhatsApp: (99) 99999-9999</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-secondary mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Ecommerce. Todos os direitos reservados.
      </div>
    </footer>
  );
}