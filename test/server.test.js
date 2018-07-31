const expect=require('expect');
const request=require('supertest');

const {app}=require('../server/server');
const {KBS}=require('../models/kb-model');

//It will make sure that the database in clean state before start testing
beforeEach((done)=>{
    KBS.remove({}).then(()=>done());
});

describe('POST /kb-add',()=>{
    it('It should insert a new KB',(done)=>{
        var text="test title";
        var url="http://testurl";
        request(app).post("/kb-add")
        .send({'title':text,'url':url})
        .expect(200)
        .expect((res)=>{
            expect(res.body.title).toBe(text);
            expect(res.body.url).toBe(url);
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            KBS.find().then((doc)=>{
                expect(doc.length).toBe(1);
                expect(doc[0].title).toBe(text);
                expect(doc[0].url).toBe(url);
                done()
            }).catch((e)=>done(e));
        });
    });
});