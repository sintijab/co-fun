import { getServerSession } from 'next-auth';
import SessionProvider from "../providers/OktaProvider";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
      </body>
    </html>
  );
}
