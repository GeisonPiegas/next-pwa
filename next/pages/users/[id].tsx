function User({ user }) {

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Usuário - {user}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
    const user = context.params.id;
  
    return {
      props: {
        user,
      },
    }
}

export async function getStaticPaths() {
    
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } }
    ]
  
    return { paths, fallback: false }
  }

export default User;