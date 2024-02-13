import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const token = localStorage.getItem("token") || ""
    useEffect(() => {
        if (token === "") {
            alert("You are not authorized to view this page")
            navigate("/sign-in")
        }
    }, [])

    const navigate = useNavigate()

    const handleLogout = () => {
        const verifyLogout = window.confirm("Are You Sure You Want To Logout?")
        if (verifyLogout) {
            localStorage.removeItem("token")
            navigate("/")
        }
    }

    const handleEdit = ()=>{

    }
    return (
        <div>
            <div className="w-100 d-flex align-items-center justify-content-between my-2 px-4">
                <h1>Dashboard</h1>
                <div>
                    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                    <button onClick={handleEdit} className="btn btn-primary mx-3">Edit Profile</button>
                    <button onClick={handleEdit} className="btn btn-danger mx-3">Delete Account</button>
                </div>
            </div>
            <p className='w-100 bg-primary text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus blanditiis nulla mollitia. Accusamus esse distinctio reiciendis exercitationem vero debitis quasi ut! Optio, ullam. Sed quos expedita atque saepe tempora consectetur.
                Eaque in saepe asperiores voluptate iure necessitatibus perspiciatis consequuntur maxime repellat non. Nemo, dolore quisquam a repudiandae natus tempore nulla. Placeat impedit esse incidunt deserunt, at iure dolorum quas libero.
                Excepturi incidunt aspernatur saepe dolores enim perspiciatis sapiente architecto, ipsum distinctio labore! Esse officia consequatur repudiandae mollitia alias. Blanditiis dicta at consectetur officia iste ipsum nemo cupiditate minus corporis dolores?
                At nihil ab, aperiam suscipit veritatis sed quaerat molestias eius, placeat esse, nobis reiciendis dolore a nemo ex odit similique quis ipsum voluptate optio commodi reprehenderit quas est natus? Magni?
                Qui facilis earum esse. Nulla error unde modi dolorem corporis cupiditate libero incidunt ut pariatur. Aut iste ad, praesentium quos perspiciatis quibusdam minima dignissimos fugit, recusandae voluptatem sit tenetur sed!
                Quia doloremque eius asperiores, placeat libero beatae debitis! Cumque quaerat quis vitae dolorem ad laudantium qui autem ipsa maiores beatae temporibus incidunt, quas ut repellat reiciendis tenetur ea perspiciatis quo.
                Veniam dolorum optio in dolor recusandae sint neque tempore, totam quo repellendus sed ea veritatis, vero cupiditate? Molestias ex dignissimos doloribus expedita sequi obcaecati, quos totam eos commodi! Rerum, adipisci.
                Optio in architecto quas blanditiis aliquam cupiditate autem magni adipisci praesentium cum, accusantium incidunt esse consectetur consequatur enim quae delectus ipsa, excepturi id doloremque! Atque fugiat unde facilis eaque quibusdam.
                Magni expedita et architecto minima earum, voluptatibus aliquid dolorum! Ad necessitatibus quisquam sed nostrum sit quasi perspiciatis expedita reprehenderit mollitia! Similique repudiandae, culpa laboriosam nobis mollitia rem porro illum hic?
                Corporis esse laudantium exercitationem fuga laborum repellat provident vitae officiis voluptatibus hic facere quaerat itaque fugiat quisquam voluptatum error, adipisci assumenda ratione doloremque rerum accusamus odio ducimus! Minus, quam amet.
                Voluptatibus consectetur totam laboriosam at exercitationem, ducimus unde quas doloremque optio fugit assumenda mollitia vitae, accusantium, autem quis ullam debitis dolorem suscipit cum? Dolor eligendi dicta repudiandae cupiditate quos ea.
                Assumenda libero blanditiis cupiditate aspernatur pariatur natus provident corporis impedit sunt nostrum perspiciatis, eveniet earum sequi necessitatibus fugiat vitae maxime totam accusamus! Magnam officiis porro molestiae laborum eum nam voluptatem?
                Placeat facere culpa deserunt dolorum tenetur dicta aspernatur doloribus, officia inventore qui excepturi voluptatem. Sint laborum animi dolores fugit necessitatibus quo et sit temporibus commodi ut labore, possimus totam eligendi!
                Consequuntur corrupti quo, alias, consectetur ut expedita obcaecati sapiente, nobis cumque quasi laborum totam. Quaerat in fugiat quidem consequatur, necessitatibus a eum reprehenderit doloremque nostrum dolore mollitia accusantium molestias cupiditate.
                Suscipit quae in harum vitae facere voluptatibus ab nihil ullam, fuga fugit, ipsum, magnam amet nisi exercitationem necessitatibus cumque omnis? Consectetur, repellat autem dolores aliquam ex architecto nostrum est! Veniam.
                Ea in similique accusantium excepturi laborum quisquam ad. Voluptas sint, quam impedit dolore fugiat ducimus cum omnis atque fuga possimus consequuntur dolores praesentium natus nisi optio temporibus aut, nihil inventore.
                Eveniet ipsam obcaecati incidunt asperiores corporis labore magnam cumque ea dignissimos fugiat illo minus quibusdam veniam maxime, enim reiciendis, dolorem quia iusto iure rem? Unde beatae placeat nam consequatur ut?
                Tempora laudantium vitae magnam fugit dignissimos repudiandae quidem. Explicabo sunt sit corporis. Molestiae, quibusdam nesciunt mollitia excepturi exercitationem, pariatur voluptas tenetur alias placeat sit doloremque id velit soluta. Recusandae, ipsum?
                Accusamus ad placeat ea? Voluptatum magni, aperiam unde cumque doloribus suscipit placeat voluptates porro animi numquam repudiandae fugiat maxime sed delectus tempora obcaecati nisi commodi excepturi dolor nemo. Doloremque, dolore.
                Quia non quod culpa, corporis perferendis laboriosam molestias aspernatur placeat eligendi quis dicta obcaecati voluptate rerum voluptatem voluptates expedita adipisci. Ullam quos aspernatur vel culpa consequuntur at dolorum, accusamus pariatur.</p>
        </div>
    )
}

export default Dashboard