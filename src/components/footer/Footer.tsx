export default function Footer() {
  return <footer className="py-6 px-4 border-t border-border dark:border-border-dark">
    <div className="w-full max-w-[1024px] mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p>Created By <a href="https://ibrahimalmeyda.dev" target="_blank" rel="noopener noreferrer" className="text-primary">Ibrahim Almeyda</a></p>
        <p className="mt-2">All rights reserved &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>;
}
