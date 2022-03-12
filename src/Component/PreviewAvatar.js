import { useEffect, useState } from "react"

function PreviewAvatar() {

    const [avatar, setAvatar] = useState()

    function handlePreviewAvatar(e) {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)

        e.target.value = null

    }

    useEffect(() => {
        return () => { avatar && URL.revokeObjectURL(avatar.preview) }
    }, [avatar])


    return (
        <div>
            <input type="file" onChange={handlePreviewAvatar} />
            {avatar && <img src={avatar.preview} width='400' alt="avatar" />}
        </div>
    )
}

export default PreviewAvatar