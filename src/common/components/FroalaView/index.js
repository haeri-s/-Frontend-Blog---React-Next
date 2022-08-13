import dynamic from 'next/dynamic'

const FroalaView = dynamic(
    async () => {
        const values = await Promise.all([
            import("react-froala-wysiwyg/FroalaEditorView"), // must be first import since we are doing values[0] in return
            import("froala-editor/js/plugins.pkgd.min.js"),
            import("froala-editor/css/froala_style.min.css"),
            // import("froala-editor/css/froala_editor.pkgd.min.css"),
        ]);
        return values[0];
    },
    {
        loading: () => <p></p>,
        ssr: false
    }
);
export default FroalaView;