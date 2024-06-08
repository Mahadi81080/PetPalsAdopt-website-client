const AccordionSection = () => {
  return (
    <div className="accordion-img h-full flex justify-end items-center py-20">
      <div className=" md:w-2/3 lg:w-2/3 md:mr-20 lg:mr-20">
        <div className="text-center space-y-4 mb-10">
            <h4 className="text-xl  md:text-2xl lg:text-2xl font-bold text-blue-400">We love Pets</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold  text-white">Taking Care Of Pets</h1>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-blue-500">
            What is to be avoided for pups?
          </div>
          <div className="collapse-content">
            <p className="text-white">
              Etori haum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est elige ndi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptasi ass umenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-blue-500">
            How often should I walk my dog?
          </div>
          <div className="collapse-content">
            <p className="text-white">
              Turpis cursus in hac habitasse platea dictumst quisque. Tellus
              orci ac auctor augue mauris augue neque. Vel quam elementum
              pulvinar etiam non. Dui id ornare arcu odio ut sem nulla pharetra
              diam. Ultrices vitae auctor eu augue ut lectus. Risus viverra
              adipiscing at in.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-blue-500">
            How often should I wash my pets?
          </div>
          <div className="collapse-content">
            <p className="text-white">
              Libero id faucibus nisl tincidunt eget nullam. Sit amet luctus
              venenatis lectus magna fringilla urna. Tellus id interdum velit
              laoreet id donec ultrices tincidunt. Ultrices in iaculis nunc sed
              augue lacus viverra vitae congue. Leo duis ut diam quam nulla. Est
              sit amet facilisis magna etiam tempor orci eu.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-blue-500">
            Can I feed my dog cat food?
          </div>
          <div className="collapse-content">
            <p className="text-white">
              Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
              Vestibulum sed arcu non odio euismod lacinia at. Justo laoreet sit
              amet cursus sit. Ornare lectus sit amet est placerat in egestas
              erat imperdiet. Mauris cursus mattis molestie a iaculis at erat
              pellentesque adipiscing.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-blue-500">
            What shots do pets need?
          </div>
          <div className="collapse-content">
            <p className="text-white">
              Viverra ipsum nunc aliquet bibendum. Nisi lacus sed viverra
              tellus. Lacus suspendisse faucibus interdum posuere. Mauris augue
              neque gravida in fermentum et sollicitudin. Ut tortor pretium
              viverra suspendisse potenti nullam ac tortor vitae.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-blue-500">
            What is to be avoided for pups?
          </div>
          <div className="collapse-content">
            <p className="text-white">
              Etori haum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est elige ndi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptasi ass umenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
