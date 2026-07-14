export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 md:px-10 py-10">
      <div className="max-w-wrap mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="font-display text-lg">Vaishnavi Dwivedi</p>
          <p className="text-sm text-muted mt-1">
            Video Editor • Thumbnail Designer
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          Available for Freelance Work
        </div>

        <p className="text-xs text-muted">&copy; {year} Vaishnavi Dwivedi</p>
      </div>
    </footer>
  );
}
