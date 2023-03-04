
import auth from '@/src/auth/firebase/Firebase.init'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import DashboardLayout from '@/src/layout/DashboardLayout'
import { useAuthState } from 'react-firebase-hooks/auth'

const MyCourses = () => {
  const [user] = useAuthState(auth)
  // console.log(user)
  return (
    <>
      <CommonHead
        title={"Xplainerr | My Courses"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <DashboardLayout user={user}>
        <div className='container mx-auto px-3 lg:px-16'>
          <h2 className='text-xl lg:text-3xl font-semibold py-3'>My Courses</h2>
          <p className='text-gray-500'>Continue learning with our recommendations based on your career goals and recent activity</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab delectus neque recusandae fugiat quos possimus voluptate, consectetur magnam sunt libero quaerat, mollitia dolorum aut eum magni esse rerum soluta dolor voluptatem? Odio facere, officia explicabo a nostrum at excepturi? Excepturi at, quod, optio molestias blanditiis eveniet in corporis asperiores saepe impedit nulla beatae, voluptatibus obcaecati nobis molestiae itaque aspernatur aperiam accusamus debitis voluptate iure. Aut eveniet consequuntur molestiae corrupti quaerat? Maxime quos ducimus delectus provident debitis saepe itaque amet quam, incidunt rem, aperiam sequi nisi dicta eius facere. Nemo consequuntur eveniet pariatur necessitatibus fugit aliquid atque iusto iste nulla reiciendis, sit quaerat incidunt quia quas voluptate error nesciunt nobis aut adipisci vel repudiandae tempore aperiam corrupti? Distinctio ipsum totam inventore voluptatem? Cumque velit perferendis quibusdam non est esse porro qui aliquid maiores eaque mollitia adipisci delectus dolorem quia ea quis ut quas obcaecati dignissimos asperiores, soluta laudantium reprehenderit? Laboriosam iure, sunt consequatur cumque doloremque ipsam quo quisquam. Deserunt illo fugiat rerum sed reprehenderit distinctio impedit qui, ipsam harum corporis minus dolore tenetur, ullam numquam autem earum aspernatur facilis modi sunt quaerat quos sapiente possimus dignissimos consequuntur. Sapiente recusandae voluptatem nobis consequuntur quibusdam maxime aliquam saepe cumque deleniti iure cum nam aspernatur temporibus facilis doloremque optio totam animi sint voluptate dignissimos, quam quidem, neque eligendi? Sed labore ex reiciendis placeat ipsa. Fugit, eius, cumque quasi ullam qui ducimus, dignissimos reprehenderit debitis illum atque corporis commodi porro minima. Esse temporibus est quia cupiditate amet at possimus sequi deserunt, veritatis facere ducimus repellendus nisi laboriosam dolor consequuntur ipsa. Blanditiis, fuga ipsum ex error modi dolorum aliquam nemo enim delectus. Voluptates explicabo aliquam molestias in corrupti dignissimos obcaecati exercitationem nihil ad, provident amet similique? Praesentium facere provident tempore explicabo nobis, id rerum. Iste iure enim mollitia corrupti, sint cumque, doloribus facilis neque harum, at ipsa velit a ad quasi deleniti culpa. Voluptatem quibusdam et quo reiciendis, quod quasi animi molestias, quos obcaecati officia unde! Labore, asperiores. Illo labore, harum neque fuga qui dolores! Illum, perferendis error placeat cupiditate nihil commodi quo distinctio corrupti explicabo quisquam impedit, ducimus laudantium saepe. Hic quo sapiente, quis minus dolores vero omnis nisi veritatis, sequi inventore facere totam libero sit nulla consectetur architecto nam ad quod iure unde iusto animi dicta placeat recusandae. Temporibus nostrum maxime aspernatur delectus, repudiandae harum accusantium in ad blanditiis reiciendis pariatur eligendi necessitatibus id corporis mollitia iusto iure facere quam! Blanditiis fuga, quas, quia ratione dolor repellat consequuntur est quod alias hic corrupti vero dignissimos animi porro beatae debitis totam voluptas vitae libero quibusdam explicabo doloremque. Et saepe maxime blanditiis, eius debitis dicta exercitationem, modi quod dolores iusto deleniti aliquid molestiae itaque sit vitae quas libero in voluptate molestias? Quo, recusandae hic sequi ut reiciendis maiores praesentium alias consectetur nam quis. Ipsam non eos quisquam fuga, ex labore nobis! Tenetur totam adipisci facere. Beatae, asperiores. Ipsum est aperiam qui rem consequuntur sequi molestiae aut iste nisi assumenda tempore consectetur, aliquid eveniet impedit non, dicta animi quos dignissimos repellendus ab quis vero dolor magni. Vel sint sapiente ducimus tempore recusandae voluptas assumenda soluta sequi totam? A illum repudiandae sit dolores libero, quia ut explicabo maxime omnis consequuntur tempore. Deleniti, in nemo suscipit fuga ratione, delectus minima ipsa, cupiditate nihil officia provident rerum! Perferendis, quis beatae dolorem aliquid, temporibus, magnam totam atque laborum ullam quia nostrum provident animi suscipit voluptatibus praesentium. Velit ipsam ex corporis quibusdam. Suscipit nesciunt consequuntur impedit, incidunt optio, eveniet, commodi voluptatem enim odio voluptas reprehenderit rerum quasi nemo aliquam hic ipsa quia nulla id cum. Inventore, assumenda iste? Explicabo totam natus doloribus veritatis, fuga nobis culpa molestias tenetur obcaecati distinctio quisquam voluptate.
          </p>
        </div>
      </DashboardLayout>
    </>
  )
}

export default MyCourses